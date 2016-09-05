import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>To-Do List</h1>

    <input type="text" [(ngModel)]="newTask.name" />
    <input type="date" [(ngModel)]="newTask.dueDate" />
    <button class="btn btn-success"(click)="addTask(newTask)">Add task</button>  
<hr>
    <table class="table-striped">
        <thead>
            <tr>
                <th>Task</th> 
                <th>Status</th>
                <th>Due date</th>     
            </tr>
        </thead>
        <tbody>
                <tr *ngFor="let task of tasks">
                    <td>{{task.name }} </td>
                    <td><span [class.done]="task.done">{{task.done ? 'DONE' : 'IN PROGRESS'}} </span></td>
                    <td>{{task.dueDate}}</td>

                    <td><button class="btn btn-primary" (click)="task.done = !task.done">{{task.done ? 'Redo' : 'Done'}}</button></td>
                    <td><button class="btn btn-primary" (click)="removeTask(task)">Remove</button></td>      
                </tr>
        </tbody>
     </table>
  <hr>
     <h1> Archives </h1>
  <hr>
     <table class="table-striped">
        <thead>
            <tr>
                <th>Task completed</th>
              
            </tr>
    
        </thead>
        <tbody>
            <tr *ngFor="let task of tasks">
                <div *ngIf="task.done">
                <td>{{task.name}}</td>
                <br>
                <td><button class="btn btn-primary" (click)="removeTask(task)">Remove</button></td>
                </div>   
            </tr>
        </tbody>
    </table>
  `,
  styles:[`
    .done {
        color: green
    }
  `],
  providers: [TaskService]
})
export class AppComponent {

    public tasks = [];
    public newTask = {done: false};

    constructor(private _taskService: TaskService){}
    
    ngOnInit(){
        this.getTasks();
    }
    
    getTasks(){
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }   
    
    addTask(task){
        if(task){
            this._taskService.addTask(task);
            this.newTask = {done: false};
        }
    }
    
    removeTask(task){
        let index=this.tasks.indexOf(task);
        this.tasks.splice(index,1);     
    }

 }
