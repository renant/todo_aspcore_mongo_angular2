import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'todoform',
    template: require('./todoform.component.html')
    //styles: [require('./navmenu.component.css')]
})
export class ToDoFormComponent {
    private http: Http;
    private router: Router;
    public todo: Object = { description: "", date: this.formatDate(Date.now()), done: false }


    constructor(router: Router, http: Http) {
        
        this.http = http;
        this.router = router;
    }

    public submit() {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(this.todo);


        this.http.post('/api/ToDo/Create', body, options)
            .subscribe(result => {
                this.router.navigate(["/todolist"]);
                alert("sucess");
            });

    }

    private sucess() {
        this.router.navigate(["/todolist"]);
        alert("sucess");
    }

    private error() {
        alert("error");
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

