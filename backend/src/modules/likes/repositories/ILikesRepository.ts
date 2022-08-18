import { Like } from '@prisma/client';
import { CreateLikeDTO } from '../dtos/CreateLikeDTO';

export interface ILikesRepository {
  create: (data: CreateLikeDTO) => Promise<Like>;
  findByPostId: (post_id: string) => Promise<Like[] | null>;
  deleteById: (post_id: string, id: string) => Promise<void>;
}
