import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { Request, Response } from 'express';
import { User as UserEntity } from './user.entity';
//import { User } from './user.interface';
import { AuthGuard } from '../guards/auth.guards';
import { DateAdderInterceptor } from '../interceptors/dateadder.interceptor';
import { UserDbService } from './userDB.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly userDbService: UserDbService,
  ) {}
  @Get()
  getUsers(@Query('username') username?: string) {
    if (username) {
      return this.usersService.getUserByName(username);
    }
    return this.usersService.getUsers();
  }

  @Get('email')
  getUserByEmail() {
    return 'este endpoint rretonra un suario a traves del email';
  }
  @Get('profile')
  getUsersProfile(@Headers('token') token?: string) {
    if (token !== '1234') {
      return 'sin acceso';
    }
    return 'Este endpoint retorna un perfil de usuario';
  }
  @Get('profile/image')
  @UseGuards(AuthGuard)
  getUsersImage() {
    return 'Este endpoint retorna una imagen de usuario';
  }

  @Get('message')
  getMessage(@Res() response: Response) {
    response.status(201).send('Hola mundo');
  }
  @Get('request')
  getRequest(@Req() request: Request) {
    console.log(request);
    return 'esta ruta devuelve un request';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: UserEntity,
    @Req() request: Request & { now: string },
  ) {
    console.log('dentro del endpoint create user', request.now);
    return this.userDbService.saveUser({ ...user, createdAt: request.now });
  }
  @Put()
  updateUser() {
    return 'este endpoint actualiza un usuario';
  }
  @Delete()
  deleteUser() {
    return 'este endpoint elimina un usuario';
  }
}
