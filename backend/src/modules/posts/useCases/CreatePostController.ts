import { Request, Response } from 'express';

import { CreatePostUseCase } from './CreatePostUseCase';
import { PostsRepository } from '../repositories/implementations/PostsRepository';

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { text } = request.body;

    const createPostUseCase = new CreatePostUseCase(new PostsRepository());

    const post = await createPostUseCase.execute({
      text,
      user_id: request.userId,
    });

    response.status(201).json(post);
  }
}

export { CreatePostController };
