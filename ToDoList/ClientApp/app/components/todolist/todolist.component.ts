import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'todolist',
    template: require('./todolist.component.html')
    //styles: [require('./navmenu.component.css')]
})
export class ToDoListComponent {
    private http: Http;
    public toDoList: Array<any>[];

    constructor(http: Http) {
        this.http = http;

        this.http.get('/api/ToDo/ToDoList').subscribe(result => {
            this.toDoList = result.json();
        });
    }

    public changeStatus(todo) {

        todo.done = !todo.done;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(todo);


        this.http.post('/api/ToDo/ChangeStatus', body, options)
            .subscribe(result => {
                
            });
    }


}