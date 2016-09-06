import { Injectable } from '@angular/core';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService{
    getTasks(){
        //returns a Promise object that is resolved with the given value (TASKS)
        return Promise.resolve(TASKS);
    }
    
    addTask(task){
        TASKS.push(task);
    }

    removeTask(task){
        var index = TASKS.indexOf(task);
        TASKS.splice(index,1);
    }
}