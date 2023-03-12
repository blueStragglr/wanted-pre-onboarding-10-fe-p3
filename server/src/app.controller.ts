import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthenticatedGuard } from "./auth/authenticated.guard";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post("/auth/login")
  async login(@Request() req) {
    return {
      result: 'success',
      message: '로그인 성공'
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get("/profile")
  getLoggedIn(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get("/content")
  getProfile(@Request() req) {
    return '세션 로그인 성공시에만 받을수 있는 메시지';
  }
}

