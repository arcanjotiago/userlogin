import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { authProviders } from './auth.providers';
import { userProviders } from 'src/user/user.providers';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [DatabaseModule],
  controllers:[AuthController],
  providers: [...authProviders, AuthService, ...userProviders],
  exports:[AuthService]
})
export class AuthModule {}