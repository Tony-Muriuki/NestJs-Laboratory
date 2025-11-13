import { Column, Entity } from 'typeorm';

@Entity()
export class User {
  @Column()
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
