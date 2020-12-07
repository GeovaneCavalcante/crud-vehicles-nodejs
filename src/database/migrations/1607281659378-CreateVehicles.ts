import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVehicles1607281659378 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'board',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'chassis',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'renavam',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'model',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'brand',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'year',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
