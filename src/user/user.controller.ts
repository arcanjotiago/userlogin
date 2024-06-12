import { Controller, Get, Header, Headers, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {}

  @Get('/')
  getUser(@Headers('tokenAuthorization') tokenAuthorization:any):any {
    return this.userService.getUser(tokenAuthorization);
  }
  
  @Get(':id')
  getUserId(@Param('id') id:any) {
    return this.userService.getUserId(id);
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

}
