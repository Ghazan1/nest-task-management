/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor( private _taskService: TasksService){

    }

    @Get()
    getAllTasks(): Tasks[] {
       return this._taskService.getAllTasks();
    }
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Tasks {
        
       return this._taskService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskByID(@Param('id') id: string): Tasks{
       return this._taskService.getTaskByID(id);
 
    }

    @Delete('/:id')
    deleteTaskByID(@Param('id') id: string): void{
       return this._taskService.deleteTaskByID(id);
 
    }
}
