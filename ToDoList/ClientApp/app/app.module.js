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
var router_1 = require('@angular/router');
var angular2_universal_1 = require('angular2-universal');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./components/app/app.component');
var navmenu_component_1 = require('./components/navmenu/navmenu.component');
var home_component_1 = require('./components/home/home.component');
var fetchdata_component_1 = require('./components/fetchdata/fetchdata.component');
var counter_component_1 = require('./components/counter/counter.component');
var todolist_component_1 = require('./components/todolist/todolist.component');
var todoform_component_1 = require('./components/todoform/todoform.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                navmenu_component_1.NavMenuComponent,
                counter_component_1.CounterComponent,
                fetchdata_component_1.FetchDataComponent,
                todolist_component_1.ToDoListComponent,
                todoform_component_1.ToDoFormComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular2_universal_1.UniversalModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'counter', component: counter_component_1.CounterComponent },
                    { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
                    { path: 'todolist', component: todolist_component_1.ToDoListComponent },
                    { path: 'todoform', component: todoform_component_1.ToDoFormComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map