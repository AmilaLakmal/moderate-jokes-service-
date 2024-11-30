import { Request, Response } from "express";
import { createJoke } from "../services/joke-service";

export namespace jokeController {
  export async function createNewJoke(req: Request, res: Response) {
    const { jokeText, type } = req.body;
    try {
      const joke = await createJoke(jokeText, type);
      res.status(200).json({ success: true, joke });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }
}
