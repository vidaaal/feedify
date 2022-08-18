import { User } from '@prisma/client';
import prismaClient from '../../../../prisma';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  async createUser({
    email, name, password,
  }: CreateUserDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}

export { UsersRepository };
