import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      return user;
    } catch {
      throw new BadRequestException('Failed to create user');
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch {
      throw new BadRequestException('Failed to retrieve users');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userService.update(id, updateUserDto);
      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return user;
    } catch {
      throw new BadRequestException('Failed to update user');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const user = await this.userService.remove(id);
      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return { message: 'User successfully deleted' };
    } catch {
      throw new BadRequestException('Failed to delete user');
    }
  }
}
