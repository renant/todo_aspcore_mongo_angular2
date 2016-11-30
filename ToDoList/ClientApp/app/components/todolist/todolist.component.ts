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
    private datefilter;
    public toDoList: Array<any>[];

    constructor(http: Http) {
        this.http = http;

        this.datefilter = this.formatDate(Date.now());

        this.http.get('/api/ToDo/ToDoList/?date=' + this.datefilter).subscribe(result => {
            this.toDoList = result.json();
        });
    }

    public list() {
        this.http.get('/api/ToDo/ToDoList/?date=' + this.datefilter).subscribe(result => {
            this.toDoList = result.json();
        });
    }

    public remove(id: string) {
        this.http.delete('/api/ToDo/Delete/' + id).subscribe(result => {
            this.http.get('/api/ToDo/ToDoList/?date=' + this.datefilter).subscribe(result => {
                this.toDoList = result.json();
            });
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

    private formatDate(date) {
        const d = new Date(date);
        var month = "" + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }


}