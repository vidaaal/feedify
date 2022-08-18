import bcrypt from 'bcrypt';

import { AppError } from '../../../../errors/AppError';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {

}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password, name }: CreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await this.usersRepository.createUser({
      name,
      email,
      password: passwordHash,
    });

    delete user.password;

    return user;
  }
}

export { CreateUserUseCase };
