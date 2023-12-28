import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task.model';  // Ajuste o caminho se necessário

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  isFormVisible: boolean = false; // Variável de estado para controlar a visibilidade do formulário

  tasks: Task[] = [
    new Task('Lavar o carro', 'Descrição para lavar o carro', TaskStatus.Planned),
    new Task('Comprar sabão em pó', 'Descrição para comprar sabão em pó', TaskStatus.Planned),
    new Task('Fazer uma videochamada com amigos', 'Conversar com amigos via videochamada', TaskStatus.Planned),
    new Task('Estudar biologia', 'Revisar os capítulos de biologia para o exame', TaskStatus.InProgress),
    new Task('Fazer uma lista de tarefas', 'Organizar as atividades do dia', TaskStatus.Planned),
    new Task('Visitar um museu', 'Planejar uma visita ao museu de história natural', TaskStatus.Planned),
    new Task('Resolver quebra-cabeças', 'Passar tempo resolvendo quebra-cabeças para relaxar', TaskStatus.Planned),
    new Task('Assistir a um jogo de futebol', 'Assistir ao jogo do time favorito', TaskStatus.Planned),
    new Task('Fazer compras online', 'Comprar itens necessários online', TaskStatus.Planned),
    new Task('Aprender a tocar um instrumento', 'Começar a aprender a tocar guitarra', TaskStatus.Planned),
    new Task('Assistir a um concerto', 'Ir a um concerto de música clássica', TaskStatus.Planned),
    new Task('Escrever um poema', 'Escrever um poema sobre a natureza', TaskStatus.Planned)
  ];

  constructor() { }

  ngOnInit(): void {
  }

   openTaskForm(): void {
    this.isFormVisible = true; // Exibe o formulário
  }

  closeTaskForm(): void {
    this.isFormVisible = false; // Oculta o formulário
  }

  handleTaskAdded(newTask: Task): void {
    this.tasks.push(newTask);
    this.closeTaskForm(); // Oculta o formulário após a adição da tarefa
  }

}
