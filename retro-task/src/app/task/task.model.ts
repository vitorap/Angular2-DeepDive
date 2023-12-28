import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus {
  Planned = 'PLANNED',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  OnHold = 'ON_HOLD',
  Cancelled = 'CANCELLED',
}

export class Task {
  id: string; // Unique identifier for the task
  title: string; // Brief title for the task
  description: string; // A detailed description of the task
  status: TaskStatus; // Current status of the task
  priority: number; // Priority of the task, higher number means higher priority
  createdAt: Date; // The date and time when the task was created
  updatedAt: Date; // The date and time when the task was last updated
  dueDate: Date | null; // Optional due date for the task
  completedAt: Date | null; // The date and time when the task was completed

  constructor(
    title: string,
    description: string,
    status: TaskStatus = TaskStatus.Planned,
    priority: number = 1,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date(),
    dueDate: Date | null = null,
    completedAt: Date | null = null
  ) {
    this.id = uuidv4(); // Gera um UUID para o id
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.dueDate = dueDate;
    this.completedAt = completedAt;
  }

  // A method to update the task status
  updateStatus(newStatus: TaskStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date(); // Update the updatedAt to the current time
  }

  // A method to mark the task as completed
  completeTask(): void {
    this.updateStatus(TaskStatus.Completed);
    this.completedAt = new Date(); // Set the completedAt to the current time
  }

  // Adiciona um método para adiar a tarefa
  postponeTask(days: number): void {
    if (!this.dueDate) {
      this.dueDate = new Date();
    }
    this.dueDate.setDate(this.dueDate.getDate() + days);
    this.updatedAt = new Date();
  }

  // Adiciona um método para cancelar a tarefa
  cancelTask(): void {
    this.updateStatus(TaskStatus.Cancelled);
  }

  // Adiciona um método para reativar uma tarefa cancelada ou concluída
  reactivateTask(): void {
    if (
      this.status === TaskStatus.Cancelled ||
      this.status === TaskStatus.Completed
    ) {
      this.updateStatus(TaskStatus.Planned);
      this.completedAt = null;
    }
  }
}
