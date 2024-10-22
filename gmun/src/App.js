import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import NavBar from "./components/Navbar";
import ContactForm from "./components/Contacts";
import GuidePage from "./components/Guide";
import { useState } from "react";
import EditProfile from "./components/EditDetails";

const App = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/contact" element={<ContactForm />} />
          <Route path="/guide" element={<GuidePage />} />

          <Route path="/EditDetails" element={<EditProfile />} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
