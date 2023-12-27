import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowOnEnterDirective } from './show-on-enter.directive';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule,ShowOnEnterDirective,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  username = '';
  showParagraph = false;

  onEnter() {
    if (this.username.trim()) {
      this.showParagraph = true;
    }
  }

  resetUsername() {
    this.username = '';
    this.showParagraph = false;
  }
}
