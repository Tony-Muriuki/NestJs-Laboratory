import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
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

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  dateofBirth: Date;
}
