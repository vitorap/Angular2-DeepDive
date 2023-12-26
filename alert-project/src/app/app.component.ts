// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WarningAlertComponent, SuccessAlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alert-project';
}
