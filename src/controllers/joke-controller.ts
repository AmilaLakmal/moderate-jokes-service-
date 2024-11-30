import { Request, Response } from "express";
import { jokeService } from "../services/joke-service";

export namespace jokeController {
  export async function createNewJoke(req: Request, res: Response) {
    const { jokeText, type } = req.body;
    try {
      const joke = await jokeService.createJoke(jokeText, type);
      res.status(200).json({ success: true, joke });
      return;
    } catch (error) {
      res.status(400).json({ success: false, error: error });
      return;
    }
  }
}
