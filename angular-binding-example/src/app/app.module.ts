import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component'; // Caminho correto para o UserFormComponent
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoggerComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione FormsModule à lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
