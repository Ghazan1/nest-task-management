/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Tasks } from './tasks.model';
import {TasksStatus} from './tasks.model'

@Injectable()
export class TasksService {
  
    private tasks: Tasks[] = [];

    getAllTasks(): Tasks[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Tasks {
        const {title,description} = createTaskDto
        const task: Tasks = {
            id: randomUUID,
            title,
            description,
            status: TasksStatus.OPEN
        }

        this.tasks.push(task);
        return task;
    }

    getTaskByID(id: string): Tasks{
      return this.tasks.find((task) => task.id === id);

    }

    deleteTaskByID(id: string): void{
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    
}
