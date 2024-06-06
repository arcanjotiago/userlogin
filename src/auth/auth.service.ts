import { BadRequestException, Inject, Injectable, Put } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
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

  // @Put(':email')
  async postAuth(authDto: AuthDto): Promise<any> {
    let emailDatabase;
    let passwordDatabase;
    let userDatabase;

    try{
      userDatabase = await this.userRepository.findOneBy({email: authDto.email}); 
      emailDatabase = userDatabase.email;
      passwordDatabase = userDatabase.password;
    } catch(error){
       
      throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Error when check your email in database. Please, check your email is correct!' })
    }
  
    if(emailDatabase === authDto.email && passwordDatabase === authDto.password){
      const genTokenLogin:any = uuidv4();
    
      const auth: Auth = new Auth();
      auth.access_token = genTokenLogin;
      auth.expires_at = (Date.now());
      auth.user_id = userDatabase.id;
      this.authRepository.save(auth);

      let user: User = new User();
      user = userDatabase;
      user.access_token = genTokenLogin;
      this.userRepository.update({id:user.id}, {access_token:user.access_token});

      return {
        "message":"Login sucessfull!",
        "statusCode": 201,
        "access_token":user.access_token,
        "expires_at":"24 Hrs"
      }
    }
    
    return {"message": "Your credentials is incorect. Please try again!", "statusCode": 404}
  }
}