import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task: any = { title: '' , status: ''};
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Lógica para submeter o formulário
  }

}
