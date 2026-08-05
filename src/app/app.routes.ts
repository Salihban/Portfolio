import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Legal } from './legal/legal';
import { Privacy } from './privacy/privacy';

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
        path: "privacy",
        component: Privacy
    }
];
