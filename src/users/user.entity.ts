import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  gender: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
