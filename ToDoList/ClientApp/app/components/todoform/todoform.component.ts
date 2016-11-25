import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'todoform',
    template: require('./todoform.component.html')
    //styles: [require('./navmenu.component.css')]
})
export class ToDoFormComponent {
    private router: Router;

    constructor(router : Router) {
        this.router = router;
    }

    public submit() {
        this.router.navigate(["/todolist"]);
    }
}

