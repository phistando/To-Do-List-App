"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./task.service');
var AppComponent = (function () {
    function AppComponent(_taskService) {
        this._taskService = _taskService;
        this.tasks = [];
        this.newTask = {};
    }
    //instantiate this variable _taskService as a new class of object based on the imported TaskService
    //inject _taskService using type: TaskService   
    AppComponent.prototype.ngOnInit = function () {
        //lifecycle hook - Initialize the directive/component after Angular initializes the data-bound input properties
        this.getTasks();
    };
    AppComponent.prototype.getTasks = function () {
        var _this = this;
        //then is a method to return a promise
        //=> arrow function - a shortcut similar to: function(tasks) { this.tasks = tasks }
        this._taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
    };
    AppComponent.prototype.addTask = function (task) {
        if (task) {
            this._taskService.addTask(task);
            this.newTask = { done: false };
        }
    };
    AppComponent.prototype.removeTask = function (task) {
        if (task) {
            this._taskService.removeTask(task);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>To-Do List</h1>\n\n    <input type=\"text\" [(ngModel)]=\"newTask.name\" />\n    <input type=\"date\" [(ngModel)]=\"newTask.dueDate\" />\n    <button class=\"btn btn-success\"(click)=\"addTask(newTask)\">Add task</button>  \n<hr>\n    <table class=\"table-striped\">\n        <thead>\n            <tr>\n                <th>Task</th> \n                <th>Status</th>\n                <th>Due date</th>     \n            </tr>\n        </thead>\n        <tbody>\n                <tr *ngFor=\"let task of tasks\">\n                    <td>{{task.name }} </td>\n                    <td><span [class.done]=\"task.done\">{{task.done ? 'DONE' : 'IN PROGRESS'}} </span></td>\n                    <td>{{task.dueDate}}</td>\n\n                    <td><button class=\"btn btn-primary\" (click)=\"task.done = !task.done\">{{task.done ? 'Redo' : 'Done'}}</button></td>\n                    <td><button class=\"btn btn-primary\" (click)=\"removeTask(task)\">Remove</button></td>      \n                </tr>\n        </tbody>\n     </table>\n  <hr>\n     <h1> Archives </h1>\n  <hr>\n     <table class=\"table-striped\">\n        <thead>\n            <tr>\n                <th>Tasks completed</th>  \n            </tr>\n\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let task of tasks\">\n                <div *ngIf=\"task.done\">\n                <td>{{task.name}}</td>\n                \n                <td><button class=\"btn btn-primary\" id=\"archivesRemoveBtn\" (click)=\"removeTask(task)\">Remove</button></td> \n                </div>   \n            </tr>\n        </tbody>\n    </table>\n  ",
            styles: ["\n    .done {\n        color: green\n    }\n  "],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map