import { IsNotEmpty } from 'class-validator';
import { TasksStatus } from '../tasks.model';

export class updateStatusDTO {
  @IsNotEmpty()
  status: TasksStatus;
}
