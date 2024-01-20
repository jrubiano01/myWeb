import { Routes } from '@angular/router';

/** Components */
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',        
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'todo-list',
        component: TodoListComponent
    }
];
