//User Entity
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users') // ← renamed table
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 24, unique: true, nullable: false })
  username: string;
  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;
  @CreateDateColumn() //Sets the value of the Created At Field when Created
  createdAT: Date; //Record Date and Time when a User was Created.
  updatedAT: Date;
  deletedAT: Date;
}
