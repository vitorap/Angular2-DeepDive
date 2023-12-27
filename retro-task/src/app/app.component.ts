import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTask = null;

  // Exemplo de método para selecionar uma tarefa
  // Na prática, isso pode vir de um evento ou interação do usuário
  selectTask(task: any) {
    this.selectedTask = task;
  }
}
