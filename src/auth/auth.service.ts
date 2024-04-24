import { Injectable, Inject } from '@nestjs/common';
// import { User } from 'src/user/user.entity';
// import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
//   constructor(
//     @Inject('USER_REPOSITORY')
//     private userRepository: Repository<User>,
//   ) {}

  async postAuth(): Promise<any> {
    return 'Teste login';
  }

}