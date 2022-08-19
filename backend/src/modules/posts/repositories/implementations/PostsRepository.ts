import { Post } from '@prisma/client';
import prismaClient from '../../../../prisma';
import { CreatePostDTO } from '../../dtos/CreatePostDTO';
import { IPostsRepository } from '../IPostsRepository';

class PostsRepository implements IPostsRepository {
  async create({ text, user_id }: CreatePostDTO): Promise<Post> {
    const post = await prismaClient.post.create({
      data: {
        text,
        user_id,
      },
    });

    return post;
  }

  async findById(id: string): Promise<Post | null> {
    const post = await prismaClient.post.findFirst({
      where: { id },
    });

    return post;
  }

  async findAllPopulated(): Promise<Post[]> {
    const posts = await prismaClient.post.findMany({
      include: {
        Comments: true,
        Likes: true,
      },
    });

    return posts;
  }
}

export { PostsRepository };
