/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    @Inject('API_USERS') private apiUsers: any[],
  ) {}

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  async getUsers() {
    const dbUsers = await this.usersRepository.getAllUsers();
    const users = [...dbUsers, ...this.apiUsers];
    return users;
  }

  getUserByName(username: string) {
    return this.usersRepository.getUserByName(username);
  }
  createUser(user: User) {
    return this.usersRepository.createUser(user);
  }
}
