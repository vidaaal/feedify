import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {

}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: CreateUserDTO) {
    const user = await this.usersRepository.createUser(data);

    return user;
  }
}

export { CreateUserUseCase };
