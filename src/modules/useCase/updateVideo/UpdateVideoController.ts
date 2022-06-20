import { Request, Response } from "express";
import { UpdateVideoUseCase } from "./UpdateVideoUseCase";

export class UpdateVideoController {
  async handle(request: Request, response: Response) {
    const { id: id_video } = request.params;
    const { title, description, url } = request.body;

    const updateVideoUseCase = new UpdateVideoUseCase();

    const updateVideo = await updateVideoUseCase.execute({
      id_video,
      title,
      description,
      url,
    });

    return response.json(updateVideo);
  }
}
