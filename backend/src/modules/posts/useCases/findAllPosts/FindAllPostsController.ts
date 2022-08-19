import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories/implementations/PostsRepository';
import { FindAllPostsUseCase } from './FindAllPostsUseCase';

class FindAllPostsController {
  async handle(request: Request, response: Response) {
    const findAllPostsUseCase = new FindAllPostsUseCase(new PostsRepository());

    const postsPopulated = await findAllPostsUseCase.execute();

    response.json(postsPopulated);
  }
}

export { FindAllPostsController };
