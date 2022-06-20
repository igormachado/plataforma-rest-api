import { prisma } from "../../../database/prismaClient";

export class FindAllVideosUseCase {
  async execute(id_video: string) {
    const findVideos = await prisma.videos.findMany({
      where: {
        id: id_video,
      },
    });

    return findVideos;
  }
}
