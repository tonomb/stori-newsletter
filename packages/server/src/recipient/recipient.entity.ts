import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recipient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column({ default: true })
  subscribed: boolean;

  @Column('uuid')
  unsubscribeToken: string;
}
