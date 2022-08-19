import { CreateCommentDTO } from '../../dtos/CreateCommentDTO';
import { ICommentsRepository } from '../../repositories/ICommentsRepository';

class CreateCommentUseCase {
  private commentsRepository: ICommentsRepository;

  constructor(commentsRepository: ICommentsRepository) {
    this.commentsRepository = commentsRepository;
  }

  async execute(data: CreateCommentDTO) {
    const comment = await this.commentsRepository.create(data);

    return comment;
  }
}

export { CreateCommentUseCase };
