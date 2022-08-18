import { Request, Response } from 'express';
import { PostsRepository } from '../../../posts/repositories/implementations/PostsRepository';
import { LikesRepository } from '../../repositories/implementations/LikesRepository';

import { CreateLikeUseCase } from './CreateLikeUseCase';

class CreateLikeController {
  async handle(request: Request, response: Response) {
    const { post_id } = request.params;

    const createLikeUseCase = new CreateLikeUseCase(
      new LikesRepository(),
      new PostsRepository(),
    );

    const like = await createLikeUseCase.execute({
      post_id,
      user_id: request.userId,
    });

    response.json(like);
  }
}

export { CreateLikeController };
