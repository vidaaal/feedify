import { Comment } from '@prisma/client';
import prismaClient from '../../../../prisma';
import { CreateCommentDTO } from '../../dtos/CreateCommentDTO';
import { ICommentsRepository } from '../ICommentsRepository';

class CommentsRepository implements ICommentsRepository {
  async create({ post_id, text, user_id }: CreateCommentDTO): Promise<Comment> {
    const comment = await prismaClient.comment.create({
      data: {
        post_id,
        text,
        user_id,
      },
    });

    return comment;
  }
}

export { CommentsRepository };
