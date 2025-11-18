//Users Entity
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // ← renamed table
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  lastName: string;
  @Column({ type: 'varchar', length: 10, nullable: true })
  gender: string;
  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;
}
