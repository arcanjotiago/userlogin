import { Inject, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private authRepository: Repository<Auth>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async postAuth(authDto: AuthDto): Promise<any> {
    const user:User = new User();
    user.email = authDto.email;
    user.password = authDto.password;
    
    // const getUser:User = this.userRepository.findOneBy({email: user.email}); 
    // if(getUser.email === '')
    
    
    
    return this.userRepository.findOneBy({email: user.email}); 


  }

}