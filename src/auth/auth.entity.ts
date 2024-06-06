import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { User } from '../user/user.entity';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: UUID;
  
  @Column('timestamp with time zone')
  created_at: Timestamp;
  
  @Column('text')
  access_token: string;
  
  @Column('text')
  expires_at: number;

  @Column('text')
  user_id: string;
  // @ManyToOne(() => User, (user: User) => user.access_token)
  // user_id: User;
  
}