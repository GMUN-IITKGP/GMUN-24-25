import mongoose from "mongoose";
import { Schema } from "mongoose";

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    answers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer",
        },
    ], 
}, { timestamps: true });

export const Question = mongoose.model("Question", QuestionSchema);