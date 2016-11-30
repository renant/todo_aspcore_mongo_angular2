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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ToDoListComponent = (function () {
    function ToDoListComponent(http) {
        var _this = this;
        this.http = http;
        this.datefilter = this.formatDate(Date.now());
        this.http.get('/api/ToDo/ToDoList/?date=' + this.datefilter).subscribe(function (result) {
            _this.toDoList = result.json();
        });
    }
    ToDoListComponent.prototype.list = function () {
        var _this = this;
        this.http.get('/api/ToDo/ToDoList/?date=' + this.datefilter).subscribe(function (result) {
            _this.toDoList = result.json();
        });
    };
    ToDoListComponent.prototype.remove = function (id) {
        var _this = this;
        this.http.delete('/api/ToDo/Delete/' + id).subscribe(function (result) {
            _this.http.get('/api/ToDo/ToDoList/?date=' + _this.datefilter).subscribe(function (result) {
                _this.toDoList = result.json();
            });
        });
    };
    ToDoListComponent.prototype.changeStatus = function (todo) {
        todo.done = !todo.done;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(todo);
        this.http.post('/api/ToDo/ChangeStatus', body, options)
            .subscribe(function (result) {
        });
    };
    ToDoListComponent.prototype.formatDate = function (date) {
        var d = new Date(date);
        var month = "" + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ToDoListComponent = __decorate([
        core_1.Component({
            selector: 'todolist',
            template: require('./todolist.component.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ToDoListComponent);
    return ToDoListComponent;
}());
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=todolist.component.js.map