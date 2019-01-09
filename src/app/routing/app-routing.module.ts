import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { pageRoutes, PathNames } from './path-name-data';

const routes = [
  { path: PathNames.home, component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...pageRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
