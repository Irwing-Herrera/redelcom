import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../app/pages/not-found/not-found.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PagesComponent,
        // canActivate: [AuthGuard]
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },{
        path: 'login',
        component: LoginComponent
      },{
        path: 'not-found',
        component: NotFoundComponent
      },{
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class RoutesModule { }

export const RouterComponents = [
  NotFoundComponent,
  LoginComponent,
  PagesComponent,
  HomeComponent
];
