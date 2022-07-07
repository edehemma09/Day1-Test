import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './pages/sport/sport.component';
import { SportsUiComponent } from './pages/sports-ui/sports-ui.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'sports',
    component:SportsUiComponent,

  },
  {
    path: 'sport',
    component: SportComponent,
  },

  {
  path: 'login',
  component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
