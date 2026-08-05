import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Legal } from './legal/legal';

export const routes: Routes = [
    {
        path:"",
        component: Home
    },
    {
        path: "legal",
        component: Legal
    },
    {
        path: '**',
        redirectTo: ''
    }
];
