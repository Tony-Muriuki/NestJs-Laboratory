import { Column, Entity } from 'typeorm';

@Entity()
export class Profile {
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
}
