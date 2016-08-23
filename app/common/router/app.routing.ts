import { RouterModule, Routes } from '@angular/router';

import {HomeComponent, AboutComponent} from '../components/index';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);