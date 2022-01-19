/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('users')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
