import { MigrationInterface, QueryRunner } from "typeorm";

export class  initialMigration implements MigrationInterface {
    name = ' .migration1712703128576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                CREATE TABLE "user" 
                (
                    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), 
                    "name" text NOT NULL, 
                    "email" text NOT NULL, 
                    "password" text NOT NULL, 
                    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
                )
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE public.user`);
    }

}
