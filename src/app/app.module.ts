import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//RUTAS
import { RoutesModule, RouterComponents } from 'src/config/routes.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './shared/components/formulario/formulario.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterComponents,
    LoginComponent,
    NotFoundComponent,
    PagesComponent,
    NavBarComponent,
    HomeComponent,
    FormularioComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
