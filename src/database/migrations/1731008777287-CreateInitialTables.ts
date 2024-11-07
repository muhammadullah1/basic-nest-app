import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1731008777287 implements MigrationInterface {
    name = 'CreateInitialTables1731008777287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`geos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`lat\` decimal(10,6) NOT NULL, \`lng\` decimal(10,6) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, INDEX \`IDX_4facb7e2063ce5ecbed2cf088d\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`addresses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`street\` varchar(255) NOT NULL, \`suite\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`zipcode\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, \`geoId\` int NULL, INDEX \`IDX_9239128a6170bb533f2eb75b05\` (\`uuid\`), UNIQUE INDEX \`REL_49c35157842aec1a76537798fa\` (\`geoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`catchPhrase\` varchar(255) NOT NULL, \`bs\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, INDEX \`IDX_535ddf773996ede3697d07ef71\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`body\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, \`postId\` int NOT NULL, INDEX \`IDX_160936d39977f78f7789e0fb78\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`body\` text NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, \`userId\` int NULL, INDEX \`IDX_5e4c1fdaa5e514bb813e64457a\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`photos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`thumbnailUrl\` varchar(255) NOT NULL, \`albumId\` int NOT NULL, INDEX \`IDX_8f4e88336a109cb16353fc2835\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`albums\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_4133a50b89ba5db182fbc97bae\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`todos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`completed\` tinyint NOT NULL DEFAULT 0, \`userId\` int NOT NULL, INDEX \`IDX_74f598342366965330edd84981\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`website\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`deletedAt\` datetime NOT NULL, \`addressId\` int NULL, \`companyId\` int NULL, INDEX \`IDX_951b8f1dfc94ac1d0301a14b7e\` (\`uuid\`), UNIQUE INDEX \`REL_bafb08f60d7857f4670c172a6e\` (\`addressId\`), UNIQUE INDEX \`REL_6f9395c9037632a31107c8a9e5\` (\`companyId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_49c35157842aec1a76537798faf\` FOREIGN KEY (\`geoId\`) REFERENCES \`geos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comments\` ADD CONSTRAINT \`FK_e44ddaaa6d058cb4092f83ad61f\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_ae05faaa55c866130abef6e1fee\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photos\` ADD CONSTRAINT \`FK_f012e62aaf25a8210ed0d935f0e\` FOREIGN KEY (\`albumId\`) REFERENCES \`albums\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`albums\` ADD CONSTRAINT \`FK_8e46da7abb99e39551c42451684\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`todos\` ADD CONSTRAINT \`FK_4583be7753873b4ead956f040e3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_bafb08f60d7857f4670c172a6ea\` FOREIGN KEY (\`addressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_6f9395c9037632a31107c8a9e58\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_6f9395c9037632a31107c8a9e58\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_bafb08f60d7857f4670c172a6ea\``);
        await queryRunner.query(`ALTER TABLE \`todos\` DROP FOREIGN KEY \`FK_4583be7753873b4ead956f040e3\``);
        await queryRunner.query(`ALTER TABLE \`albums\` DROP FOREIGN KEY \`FK_8e46da7abb99e39551c42451684\``);
        await queryRunner.query(`ALTER TABLE \`photos\` DROP FOREIGN KEY \`FK_f012e62aaf25a8210ed0d935f0e\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_ae05faaa55c866130abef6e1fee\``);
        await queryRunner.query(`ALTER TABLE \`comments\` DROP FOREIGN KEY \`FK_e44ddaaa6d058cb4092f83ad61f\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_49c35157842aec1a76537798faf\``);
        await queryRunner.query(`DROP INDEX \`REL_6f9395c9037632a31107c8a9e5\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`REL_bafb08f60d7857f4670c172a6e\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_951b8f1dfc94ac1d0301a14b7e\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_74f598342366965330edd84981\` ON \`todos\``);
        await queryRunner.query(`DROP TABLE \`todos\``);
        await queryRunner.query(`DROP INDEX \`IDX_4133a50b89ba5db182fbc97bae\` ON \`albums\``);
        await queryRunner.query(`DROP TABLE \`albums\``);
        await queryRunner.query(`DROP INDEX \`IDX_8f4e88336a109cb16353fc2835\` ON \`photos\``);
        await queryRunner.query(`DROP TABLE \`photos\``);
        await queryRunner.query(`DROP INDEX \`IDX_5e4c1fdaa5e514bb813e64457a\` ON \`posts\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP INDEX \`IDX_160936d39977f78f7789e0fb78\` ON \`comments\``);
        await queryRunner.query(`DROP TABLE \`comments\``);
        await queryRunner.query(`DROP INDEX \`IDX_535ddf773996ede3697d07ef71\` ON \`companies\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
        await queryRunner.query(`DROP INDEX \`REL_49c35157842aec1a76537798fa\` ON \`addresses\``);
        await queryRunner.query(`DROP INDEX \`IDX_9239128a6170bb533f2eb75b05\` ON \`addresses\``);
        await queryRunner.query(`DROP TABLE \`addresses\``);
        await queryRunner.query(`DROP INDEX \`IDX_4facb7e2063ce5ecbed2cf088d\` ON \`geos\``);
        await queryRunner.query(`DROP TABLE \`geos\``);
    }

}
