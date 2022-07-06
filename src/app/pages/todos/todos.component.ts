import { Component, OnInit} from "@angular/core";
import { Todo } from "src/app/models";
import { TodosServices } from "../../services/todos.service";



@Component({

  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ['./todos.component.scss', './todos.component.css']

})
export class TodosComponent implements OnInit{
todoRecords:Todo[] = [];

constructor(
  private todoServices: TodosServices

){}
ngOnInit(): void {
  this.getTodoRecords();
}

getTodoRecords(): void{
  this.todoRecords = this.todoServices.retrieveTodos();
  console.log('todos', this.todoRecords);


}

}
