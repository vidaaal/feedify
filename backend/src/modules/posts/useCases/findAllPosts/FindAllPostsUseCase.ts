import { IPostsRepository } from '../../repositories/IPostsRepository';

class FindAllPostsUseCase {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute() {
    const postsPopulated = await this.postsRepository.findAllPopulated();

    return postsPopulated;
  }
}

export { FindAllPostsUseCase };
