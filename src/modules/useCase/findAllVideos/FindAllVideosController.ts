import { Request, Response } from "express";
import { FindAllVideosUseCase } from "./FindAllVideosUseCase";

export class FindAllVideosController {
  async handle(request: Request, response: Response) {
    const { id_video } = request.params;

    const findAllVideosUseCase = new FindAllVideosUseCase();

    const findVideos = await findAllVideosUseCase.execute(id_video);

    return response.json(findVideos);
  }
}
