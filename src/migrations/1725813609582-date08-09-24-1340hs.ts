import { MigrationInterface, QueryRunner } from "typeorm";

export class Date0809241340hs1725813609582 implements MigrationInterface {
    name = 'Date0809241340hs1725813609582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth"."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "auth"."user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "auth"."user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "auth"."user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "marketplace"."products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "marketplace"."products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "auth"."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "auth"."user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "auth"."user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auth"."user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
    }

}
