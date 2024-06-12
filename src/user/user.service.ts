import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/auth/auth.entity';


@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('AUTH_REPOSITORY')
    private authRepository: Repository<Auth>,
  ) {}

  async getUser(access_token:any): Promise<any> {
    let tokenValidation = 0;
    
    if(access_token != ""){
      const findTokenDatabase:any = await this.authRepository.findOneBy( {access_token} );
      tokenValidation = findTokenDatabase.validity;

      if(findTokenDatabase == null){
        return {
          "message":"Acess not authorized! please, send a valid authorization access token!",
          "status":401
        }
      }

      const calcTokenValidate = ((Date.now() - tokenValidation) / 1000);

      if(calcTokenValidate > 86400){
        return {
          "message":"Acess not authorized! Token expired!",
          "status":401
        }
      }

    return this.userRepository.find(); 
    }

    return {
      "message":"Acess not authorized! please, send the authorization access token in header requisition!",
      "status":401
    }
  }
  

  getUserId(id: any): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  deleteUser(id: string): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
  
  updateUser(id: any, updateUserDto: UpdateUserDto): Promise<any> {
    const user: User = new User();
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.access_token = updateUserDto.access_token;
    return this.userRepository.update(id, user)
  }

  getUserEmail(email: any): Promise<User> {
    return this.userRepository.findOneBy( {email} );
  }

}