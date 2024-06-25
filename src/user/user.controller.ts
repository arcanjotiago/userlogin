import { Controller, Get, Header, Headers, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService:UserService
  ) {}

  @Get('/')
  getUser(@Headers('tokenAuthorization') tokenAuthorization:any):any {
    return this.userService.getUser(tokenAuthorization);  
  }
  
  @Get(':id')
  getUserId(@Headers('tokenAuthorization') tokenAuthorization:any, @Param('id') id:any) {
    return this.userService.getUserId(tokenAuthorization, id);
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Headers('tokenAuthorization') tokenAuthorization:any, @Param('id') id: string) {
    return this.userService.deleteUser(tokenAuthorization, id);
  }

  @Put(':id')
  updateUser(@Headers('tokenAuthorization') tokenAuthorization:any, @Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(tokenAuthorization, id, updateUserDto);
  }

}
