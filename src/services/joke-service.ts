import Joke from "../models/joke-model";

export namespace jokeService {
  export async function createJoke(jokeText: string, type: string) {
    const joke = new Joke({ jokeText, type });
    await joke.save();
    return joke;
  }
}
