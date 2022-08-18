import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { AuthWithCredentialsUseCase } from './AuthWithCredentialsUseCase';

class AuthWithCredentialsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authWithCredentialsUseCase = new AuthWithCredentialsUseCase(new UsersRepository());

    const authResponse = await authWithCredentialsUseCase.execute({ email, password });

    return response.json(authResponse);
  }
}

export { AuthWithCredentialsController };
