import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';

import { NATS_SERVICE } from '../config';
import { LoginUserDto, RegisterUsetDto } from './dto';
import { AuthGuard } from './guards';
import { Token, User } from './decorators';
import { CurrentUser } from './intefaces/current-user.interface';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUsetDto) {
    return this.client.send('auth.register.user', registerUserDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      return await firstValueFrom(
        this.client.send('auth.login.user', loginUserDto),
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyUser(@User() user: CurrentUser, @Token() token: string) {
    return { user, token };
    // console.log(headers['user']);
    // console.log(headers['token']);
    // return this.client.send('auth.verify.user', {}).pipe(
    //   catchError((err) => {
    //     throw new RpcException(err);
    //   }),
    // );
  }
}
