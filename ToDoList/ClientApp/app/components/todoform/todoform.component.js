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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ToDoFormComponent = (function () {
    function ToDoFormComponent(router, http) {
        this.todo = { description: "", date: this.formatDate(Date.now()), done: false };
        this.http = http;
        this.router = router;
    }
    ToDoFormComponent.prototype.submit = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(this.todo);
        this.http.post('/api/ToDo/Create', body, options)
            .subscribe(function (result) {
            _this.router.navigate(["/todolist"]);
            alert("sucess");
        });
    };
    ToDoFormComponent.prototype.sucess = function () {
        this.router.navigate(["/todolist"]);
        alert("sucess");
    };
    ToDoFormComponent.prototype.error = function () {
        alert("error");
    };
    ToDoFormComponent.prototype.formatDate = function (date) {
        var d = new Date(date);
        var month = "" + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ToDoFormComponent = __decorate([
        core_1.Component({
            selector: 'todoform',
            template: require('./todoform.component.html')
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], ToDoFormComponent);
    return ToDoFormComponent;
}());
exports.ToDoFormComponent = ToDoFormComponent;
//# sourceMappingURL=todoform.component.js.map