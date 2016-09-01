import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent }
];

export const routing = RouterModule.forChild(routes);