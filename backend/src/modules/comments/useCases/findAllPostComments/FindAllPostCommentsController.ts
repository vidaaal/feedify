import { Request, Response } from 'express';

import { FindAllCommentsUseCase } from './FindAllPostCommentsUseCase';
import { CommentsRepository } from '../../repositories/implementations/CommentsRepository';

class FindAllCommentsController {
  async handle(request: Request, response: Response) {
    const { post_id } = request.params;

    const findAllPostCommentsUseCase = new FindAllCommentsUseCase(new CommentsRepository());

    const postComments = await findAllPostCommentsUseCase.execute(post_id);

    response.json(postComments);
  }
}

export { FindAllCommentsController };
