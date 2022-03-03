/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Tasks, TasksStatus } from './tasks.model';
import { tsTsxJsJsxRegex } from 'ts-loader/dist/constants';
import { response } from 'express';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private _taskRepository: TaskRepository,
  ) {}
  // getAllTasks(): Tasks[] {
  //     return this.tasks;
  // }
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this._taskRepository.createTask(createTaskDto);
  }
  async getTaskByID(id: string): Promise<Task> {
    const found = await this._taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with given ID ${id} not found!`);
    }

    return found;
  }
  async deleteTaskByID(id: string): Promise<void> {
    const tasks = await this._taskRepository.delete(id);
    if (tasks.affected === 0) {
      throw new NotFoundException(`Task with given ID ${id} Not Found!`);
    }
  }
  async updateTaskStatus(id: string, status: TasksStatus): Promise<Task> {
    const task = await this.getTaskByID(id);
    task.status = status;
    await this._taskRepository.save(task);

    return task;
  }
}
