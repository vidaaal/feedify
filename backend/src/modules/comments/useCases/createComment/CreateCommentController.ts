import { Request, Response } from 'express';

import { CreateCommentUseCase } from './CreateCommentUseCase';
import { CommentsRepository } from '../../repositories/implementations/CommentsRepository';

class CreateCommentController {
  async handle(request: Request, response: Response) {
    const { text } = request.body;
    const { post_id } = request.params;

    const createCommentUseCase = new CreateCommentUseCase(new CommentsRepository());

    const comment = await createCommentUseCase.execute({
      text,
      user_id: request.userId,
      post_id,
    });

    response.status(201).json(comment);
  }
}

export { CreateCommentController };
