/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private _taskRepository: TaskRepository,
  ) {}
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
    const found = await this._taskRepository.findOne(id);

    if (!found) {
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
