import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('timestamp with time zone')
  created_at: Timestamp;
  
  @Column('text')
  name: string;
  
  @Column('text')
  email: string;
  
  @Column('text')
  password: string;
 
}