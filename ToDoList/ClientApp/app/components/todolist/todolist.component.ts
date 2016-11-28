import { Component } from '@angular/core';
import { Http } from '@angular/http';

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
            console.log(result.json());
        });
    }
}

