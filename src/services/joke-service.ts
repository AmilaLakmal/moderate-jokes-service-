import Joke from "../models/joke-model";

export const createJoke = async (jokeText: string, type: string) => {
  const joke = new Joke({ jokeText, type });
  await joke.save();
  return joke;
};
