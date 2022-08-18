import prismaClient from '../../../../prisma';
import { CreatePostDTO } from '../../dtos/CreatePostDTO';
import { IPostsRepository } from '../IPostsRepository';

class PostsRepository implements IPostsRepository {
  async create({ text, user_id }: CreatePostDTO) {
    const post = await prismaClient.post.create({
      data: {
        text,
        user_id,
      },
    });

    return post;
  }
}

export { PostsRepository };
