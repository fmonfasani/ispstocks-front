import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial21725809854383 implements MigrationInterface {
  name = 'Initial21725809854383';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth"."user" RENAME COLUMN "createAt" TO "createdAt"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth"."user" RENAME COLUMN "createdAt" TO "createAt"`,
    );
  }
}
