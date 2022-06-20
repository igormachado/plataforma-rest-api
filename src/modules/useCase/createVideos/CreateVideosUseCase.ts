import { prisma } from "../../../database/prismaClient";

interface ICreateVideo {
  title: string;
  description: string;
  url: string;
}

export class CreateVideosUseCase {
  async execute({ title, description, url }: ICreateVideo) {
    const videoExists = await prisma.videos.findFirst({
      where: {
        title,
      },
    });

    if (videoExists) {
      throw new Error("Video already exists.");
    }

    const createVideo = await prisma.videos.create({
      data: {
        title,
        description,
        url,
      },
    });

    return createVideo;
  }
}
