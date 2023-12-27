import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-logger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logger.component.html',
  styleUrl: './logger.component.css',
})
export class LoggerComponent {
  @Input() logs: { timestamp: Date, name: string }[] = [];

  getOpacity(index: number): number {
    return index < 2 ? 1 : Math.max(0.2, 1 - (index - 2) * 0.1);
  }
}
