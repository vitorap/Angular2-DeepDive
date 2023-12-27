import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

 tasks = [
    { title: 'Lavar o carro', status: 'Não Planejada' },
    { title: 'Comprar sabão em pó', status: 'Planejada' },
    { title: 'Ligar para a mãe', status: 'Não Planejada' },
    { title: 'Pagar a conta de luz', status: 'Planejada' },
    { title: 'Estudar para o exame', status: 'Em Progresso' },
    { title: 'Fazer compras de supermercado', status: 'Não Planejada' },
    { title: 'Preparar o jantar', status: 'Não Planejada' },
    { title: 'Consertar a torneira vazando', status: 'Planejada' },
    { title: 'Marcar consulta médica', status: 'Não Planejada' },
    { title: 'Enviar e-mails de trabalho', status: 'Em Progresso' },
    { title: 'Limpar o banheiro', status: 'Não Planejada' },
    { title: 'Fazer exercícios físicos', status: 'Planejada' },
    { title: 'Ler um livro', status: 'Não Planejada' },
    { title: 'Assistir a um filme', status: 'Não Planejada' },
    { title: 'Organizar a papelada', status: 'Planejada' },
    { title: 'Caminhar com o cachorro', status: 'Não Planejada' },
    { title: 'Fazer café da manhã', status: 'Não Planejada' },
    { title: 'Resolver problemas de matemática', status: 'Em Progresso' },
    { title: 'Pintar a cerca', status: 'Planejada' },
    { title: 'Aprender um novo idioma', status: 'Em Progresso' },
    { title: 'Arrumar o quarto', status: 'Não Planejada' },
    { title: 'Planejar as férias', status: 'Planejada' },
    { title: 'Fazer a lista de compras', status: 'Não Planejada' },
    { title: 'Reparar o carro', status: 'Não Planejada' },
    { title: 'Estudar programação', status: 'Em Progresso' },
    { title: 'Passear no parque', status: 'Não Planejada' },
    { title: 'Limpar o jardim', status: 'Não Planejada' },
    { title: 'Visitar a avó', status: 'Planejada' },
    { title: 'Montar um quebra-cabeça', status: 'Não Planejada' },
    { title: 'Assistir a uma série de TV', status: 'Não Planejada' },
    { title: 'Fazer um bolo', status: 'Não Planejada' },
    { title: 'Estudar história', status: 'Em Progresso' },
    { title: 'Resolver problemas de lógica', status: 'Planejada' },
    { title: 'Fazer exercícios de yoga', status: 'Não Planejada' },
    { title: 'Consertar a cerca do jardim', status: 'Não Planejada' },
    { title: 'Escrever no diário', status: 'Planejada' },
    { title: 'Assistir a um documentário', status: 'Não Planejada' },
    { title: 'Fazer uma caminhada', status: 'Não Planejada' },
    { title: 'Ler as notícias', status: 'Em Progresso' },
    { title: 'Fazer uma videochamada com amigos', status: 'Não Planejada' },
    { title: 'Estudar biologia', status: 'Em Progresso' },
    { title: 'Fazer uma lista de tarefas', status: 'Não Planejada' },
    { title: 'Visitar um museu', status: 'Planejada' },
    { title: 'Resolver quebra-cabeças', status: 'Não Planejada' },
    { title: 'Assistir a um jogo de futebol', status: 'Não Planejada' },
    { title: 'Fazer compras online', status: 'Planejada' },
    { title: 'Aprender a tocar um instrumento', status: 'Não Planejada' },
    { title: 'Assistir a um concerto', status: 'Não Planejada' },
    { title: 'Escrever um poema', status: 'Planejada' },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
