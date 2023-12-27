import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowOnEnterDirective } from './show-on-enter.directive';
import { LoggerComponent } from '../logger/logger.component';




@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule,ShowOnEnterDirective,CommonModule,LoggerComponent],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  username = '';
  showParagraph = false;
  showLogs = false;
  logs: {timestamp: Date, name: string}[] = [];

  onEnter() {
    if (this.username.trim()) {
      this.showParagraph = true;
      this.logs.push({timestamp: new Date(), name: this.username});
    }
  }

  toggleLogs() {
    this.showLogs = !this.showLogs;
  }

  resetUsername() {
    this.username = '';
    this.showParagraph = false;
  }
}
