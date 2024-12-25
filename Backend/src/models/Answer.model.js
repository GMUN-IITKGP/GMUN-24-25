import mongoose, {Schema} from "mongoose";

const AnswerSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true});

export const Answer = mongoose.model("Answer", AnswerSchema);