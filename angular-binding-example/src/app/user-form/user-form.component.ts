import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  username = '';

  resetUsername() {
    this.username = '';
  }
}
 