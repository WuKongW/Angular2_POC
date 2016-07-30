import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent, AboutComponent} from '../components/index';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];