import { Comment } from '@prisma/client';
import { CreateCommentDTO } from '../dtos/CreateCommentDTO';

export interface ICommentsRepository {
  create: (data: CreateCommentDTO) => Promise<Comment>;
  findAllByPostId: (post_id: string) => Promise<Comment[]>;
}
