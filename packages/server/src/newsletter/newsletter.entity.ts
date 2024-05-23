import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Newsletter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filePath: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column('simple-array')
  recipients: string[];
}
