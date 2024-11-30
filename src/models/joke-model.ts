import mongoose, { Document, Schema } from "mongoose";

interface IJoke extends Document {
  jokeText: string;
  type: string;
  moderated: boolean;
}

const jokeSchema: Schema = new Schema(
  {
    jokeText: { type: String, required: true },
    type: { type: String, required: true },
    moderated: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Joke = mongoose.model<IJoke>("Joke", jokeSchema);

export default Joke;
