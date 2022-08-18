import { CreatePostDTO } from '../../dtos/CreatePostDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class CreatePostUseCase {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(data: CreatePostDTO) {
    const post = await this.postsRepository.create(data);

    return post;
  }
}

export { CreatePostUseCase };
