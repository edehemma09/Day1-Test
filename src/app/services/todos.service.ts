import { Injectable } from "@angular/core";
import { todosData } from "../../assets/db/todos-data";
import { Todo } from "../models";

@Injectable({
  providedIn : "root"

})


export class TodosServices{

      db_todos: Todo[] = [];

      constructor(){

        this.db_todos=todosData

      }

          retrieveTodos(){
            setTimeout(()=>{
              return this.db_todos

            }, 5000)
          }

      createTodo(payload:any){

          setTimeout(()=>{

            this.db_todos.push(payload);
          })

      }


}
