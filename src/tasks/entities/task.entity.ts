import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TasksStatus } from '../tasks.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  status: TasksStatus;
}
