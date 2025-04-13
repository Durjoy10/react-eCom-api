import { Controller, Get, Put, Body, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  async getProfile(@Req() req: Request) {
    return this.usersService.findById(req.user.id);
  }

  @Put('profile')
  async updateProfile(@Req() req: Request, @Body() updateProfileDto: any) {
    return this.usersService.update(req.user.id, updateProfileDto);
  }
}