import { DataSource, DataSourceOptions } from 'typeorm';
import { initialMigration } from './database/migrations/initial.migration';
import * as dotenv from 'dotenv';
import { User } from './user/user.entity';
dotenv.config();

export function getConfig(){
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User],
      migrations: [initialMigration],
      synchronize: false,
    } as DataSourceOptions;
  }


const datasource = new DataSource(getConfig());
datasource.initialize();

export default datasource;