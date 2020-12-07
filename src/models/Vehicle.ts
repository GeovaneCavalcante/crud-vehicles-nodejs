import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vehicles')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  board: string;

  @Column()
  chassis: string;

  @Column()
  renavam: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  year: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Vehicle;
