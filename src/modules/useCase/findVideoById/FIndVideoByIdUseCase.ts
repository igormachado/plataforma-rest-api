import { prisma } from "../../../database/prismaClient";

interface IFindById {
  id_video: string;
}

export class FindVideoByIdUseCase {
  async execute({ id_video }: IFindById) {
    const findById = await prisma.videos.findFirst({
      where: {
        id: id_video,
      },
      select: {
        title: true,
        description: true,
        url: true,
      },
    });

    if (!findById) {
      throw new Error("Not found video.");
    }

    return findById;
  }
}
