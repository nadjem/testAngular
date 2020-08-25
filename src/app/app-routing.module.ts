import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {DetailViewComponent} from "./detail-view/detail-view.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}]

})
export class AppRoutingModule { }
