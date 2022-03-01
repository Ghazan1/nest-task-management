/* eslint-disable prettier/prettier */
export interface Tasks {
  id: any;
  title: string;
  description: string;
  status: TasksStatus;
}

export enum TasksStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
