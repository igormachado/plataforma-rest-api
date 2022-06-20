import { Request, Response } from "express";
import { CreateVideosUseCase } from "./CreateVideosUseCase";

export class CreateVideosController {
  async handle(request: Request, response: Response) {
    const { title, description, url } = request.body;

    const createVideoUseCase = new CreateVideosUseCase();

    const result = await createVideoUseCase.execute({
      title,
      description,
      url,
    });

    return response.status(200).json(result);
  }
}
