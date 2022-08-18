import { Request, Response } from 'express';
import { UsersRepository } from '../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase(new UsersRepository());

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    response.status(204).json(user);
  }
}

export { CreateUserController };
