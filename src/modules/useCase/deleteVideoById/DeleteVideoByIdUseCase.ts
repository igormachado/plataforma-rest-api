import { prisma } from "../../../database/prismaClient";

interface IDeleteVideo {
  id_video: string;
  title?: string;
  description?: string;
  url?: string;
}

export class DeleteVideoByIdUseCase {
  async execute({ id_video, title }: IDeleteVideo) {
    const deleteVideoById = await prisma.videos.delete({
      where: {
        id: id_video,
      },
    });

    return deleteVideoById;
  }
}
