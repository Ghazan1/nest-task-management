import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { TasksStatus } from '../tasks.model';

export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  status: TasksStatus;
}
