import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Task, TaskStatus } from '../task.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task;
  @Output() taskAdded = new EventEmitter<Task>();
  taskForm: FormGroup;
  taskStatuses = Object.values(TaskStatus);

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(this.task ? this.task.title : ''),
      description: new FormControl(this.task ? this.task.description : ''),
      status: new FormControl(this.task ? this.task.status : TaskStatus.Planned),
      priority: new FormControl(this.task ? this.task.priority : 1),
      dueDate: new FormControl(this.task && this.task.dueDate ? this.task.dueDate : null)
    });
  }
  
  onAddTask(): void {
    const newTask = new Task(
      this.taskForm.value.title,
      this.taskForm.value.description,
      this.taskForm.value.status,
      this.taskForm.value.priority,
      new Date(), // createdAt
      new Date(), // updatedAt
      this.taskForm.value.dueDate
    );
    this.taskAdded.emit(newTask);
    this.taskForm.reset(); // Reset the form after adding
  }
}