import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosServices } from './services/todos.service';
import { ApiService } from './services/api.service';
import { Sports } from './providers/sports';
import { SportsUiComponent } from './pages/sports-ui/sports-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    SportsUiComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [TodosServices, ApiService, Sports],
  bootstrap: [AppComponent],


})
export class AppModule { }
