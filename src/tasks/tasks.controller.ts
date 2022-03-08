/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { updateStatusDTO } from './dto/status.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private _taskService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this._taskService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Promise<Task> {
    return this._taskService.getTaskByID(id);
  }

  @Delete('/:id')
  deleteTaskByID(@Param('id') id: string): Promise<void> {
    return this._taskService.deleteTaskByID(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateStatusDTO: updateStatusDTO,
  ): Promise<Task> {
    const { status } = updateStatusDTO;

    return this._taskService.updateTaskStatus(id, status);
  }

  // @Delete('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TasksStatus,
  // ): Tasks {
  //   return this._taskService.updateTaskStatus(id, status);
  // }
}
