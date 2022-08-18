import { User } from '@prisma/client';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

export interface IUsersRepository {
  createUser: (data: CreateUserDTO) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
}
