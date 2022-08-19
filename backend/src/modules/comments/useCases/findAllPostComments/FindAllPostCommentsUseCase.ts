import { ICommentsRepository } from '../../repositories/ICommentsRepository';

class FindAllCommentsUseCase {
  private commentsRepository: ICommentsRepository;

  constructor(commentsRepository: ICommentsRepository) {
    this.commentsRepository = commentsRepository;
  }

  async execute(post_id: string) {
    const postComments = await this.commentsRepository.findAllByPostId(post_id);

    return postComments;
  }
}

export { FindAllCommentsUseCase };
