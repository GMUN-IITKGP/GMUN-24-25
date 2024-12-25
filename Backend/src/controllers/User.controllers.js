import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

const generateAccessandRefreshToken = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    const error = new Error("Full name is required");
    error.status = 400;
    throw error;
  }

  if (!email) {
    const error = new Error("Email is required");
    error.status = 400;
    throw error;
  }

  if (!password) {
    const error = new Error("Password is required");
    error.status = 400;
    throw error;
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new Error("User already exists with this username or email");
    error.status = 409;
    throw error;
  }

  const user = await User.create({ fullName, email, password });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    const error = new Error("Something went wrong while registering the user");
    error.status = 500;
    throw error;
  }

  res.status(201).json(createdUser);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    const error = new Error("Email is required");
    error.status = 400;
    throw error;
  }

  if (!password) {
    const error = new Error("Password is required");
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }

  const isMatch = await user.checkPassword(password);

  if (!isMatch) {
    const error = new Error("Invalid credentials");
    error.status = 401;
    throw error;
  }

  const { accessToken, refreshToken } = await generateAccessandRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!loggedInUser) {
    const error = new Error("Couldn't login user");
    error.status = 500;
    throw error;
  }

  const options = { httpOnly: true, secure: true };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({ loggedInUser, accessToken, refreshToken });
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: 1 } },
    { new: true }
  );

  const options = { httpOnly: true, secure: true, sameSite: "none" };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({ message: "User logged out successfully" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }

  res.status(200).json(user);
});

export { registerUser, loginUser, logoutUser, getUserProfile };
