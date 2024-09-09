import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthService } from './auth.service';
import { UserController } from './user.controller';
import { AuthController } from './auth.controller';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserDbService } from './userDB.service';

// const mockUserService = {
//   getUsers: () => 'este es un servicio mock de usuarios',
// };

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    // {
    //   provide: UsersService,
    //   useValue: mockUserService,
    // },
    {
      provide: 'API_USERS',
      useFactory: async () => {
        const apiUsers = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        ).then((response) => response.json());
        return apiUsers.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });
      },
    },
    UserDbService,
    UsersService,
    AuthService,
    UsersRepository,
  ],
  controllers: [UserController, AuthController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
