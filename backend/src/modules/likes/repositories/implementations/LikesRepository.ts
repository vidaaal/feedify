import { Like } from '@prisma/client';
import prismaClient from '../../../../prisma';
import { CreateLikeDTO } from '../../dtos/CreateLikeDTO';
import { ILikesRepository } from '../ILikesRepository';

class LikesRepository implements ILikesRepository {
  async create({ post_id, user_id }: CreateLikeDTO): Promise<Like> {
    const like = await prismaClient.like.create({
      data: {
        post_id,
        user_id,
      },
    });

    return like;
  }

  async findByPostId(post_id: string): Promise<Like[] | null> {
    const likes = await prismaClient.like.findMany({
      where: { post_id },
    });

    return likes;
  }

  async deleteById(post_id: string, id: string): Promise<void> {
    await prismaClient.like.deleteMany({
      where: {
        post_id,
        id,
      },
    });
  }
}

export { LikesRepository };
