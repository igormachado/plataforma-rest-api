import { Request, Response } from "express";
import { FindVideoByIdUseCase } from "./FIndVideoByIdUseCase";

export class FindVideoByIdController {
  async handle(request: Request, response: Response) {
    const { id: id_video } = request.params;

    const findVideoByIdUseCase = new FindVideoByIdUseCase();

    const findVideoById = await findVideoByIdUseCase.execute({
      id_video,
    });

    return response.json(findVideoById);
  }
}
