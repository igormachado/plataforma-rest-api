import { prisma } from "../../../database/prismaClient";

interface IUpdateVideo {
  id_video?: string;
  title?: string;
  description?: string;
  url?: string;
}

export class UpdateVideoUseCase {
  async execute({ id_video, title, description, url }: IUpdateVideo) {
    const updateVideo = await prisma.videos.update({
      where: {
        id: id_video,
      },
      data: {
        title,
        description,
        url,
      },
    });

    return updateVideo;
  }
}
