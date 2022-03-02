/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { TaskRepository } from './entities/task.repository';
import { Tasks } from './tasks.model';
import {TasksStatus} from './tasks.model'

@Injectable()
export class TasksService {

    constructor (@InjectRepository(Task) private _taskRepository: TaskRepository,){}
 
  

    // getAllTasks(): Tasks[] {
    //     return this.tasks;
    // }

    // createTask(createTaskDto: CreateTaskDto): Tasks {
    //     const {title,description} = createTaskDto
    //     const task: Tasks = {
    //         id: randomUUID,
    //         title,
    //         description,
    //         status: TasksStatus.OPEN
    //     }

    //     this.tasks.push(task);
    //     return task;
    // }

   async getTaskByID(id: string): Promise<Task> {
      
    const found = this._taskRepository.findOne(id);
     
    if(!found){
        throw new NotFoundException(`Task with given ID ${id} not found!`);
    }

    return found;

    }

    // deleteTaskByID(id: string): void{
    //     this.tasks = this.tasks.filter((task) => task.id !== id);
    //   }
    
    //   updateTaskStatus(id: string, status: TasksStatus): Tasks{
    //     const task = this.getTaskByID(id);
    //     task.status = status;
    //     return task
    //   }
}
