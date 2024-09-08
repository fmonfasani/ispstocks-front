import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1725808193733 implements MigrationInterface {
  name = 'Initial1725808193733';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "auth"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "marketplace"`);
    await queryRunner.query(
      `CREATE TABLE "auth"."user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createAt" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "marketplace"."products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "stock" integer NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "marketplace"."products"`);
    await queryRunner.query(`DROP TABLE "auth"."user"`);
  }
}
