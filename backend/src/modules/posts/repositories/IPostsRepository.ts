import { Post } from '@prisma/client';
import { CreatePostDTO } from '../dtos/CreatePostDTO';

export interface IPostsRepository {
  create: (data: CreatePostDTO) => Promise<Post>;
  findById: (id: string) => Promise<Post | null>;
  findAllPopulated: () => Promise<Post[]>;
}
