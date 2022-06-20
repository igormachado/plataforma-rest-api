import { Request, Response } from "express";
import { DeleteVideoByIdUseCase } from "./DeleteVideoByIdUseCase";

export class DeleteVideoByIdController {
  async handle(request: Request, response: Response) {
    const { id: id_video } = request.params;

    const deleteVideoByIdUseCase = new DeleteVideoByIdUseCase();

    const deleteVideoById = await deleteVideoByIdUseCase.execute({
      id_video,
    });

    return response.json(deleteVideoById);
  }
}
