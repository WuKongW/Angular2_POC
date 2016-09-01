import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/index';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: 'app/+about/about.module' }
];

export const routing = RouterModule.forRoot(routes);