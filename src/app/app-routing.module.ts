import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";

const APP_ROUTES: Routes = [{
  path: '',
  component: NavbarComponent,
  outlet: 'navbar'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
