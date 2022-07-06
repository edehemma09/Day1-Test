import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './pages/sport/sport.component';
import { SportsUiComponent } from './pages/sports-ui/sports-ui.component';

const routes: Routes = [
  {
    path:'sports',
    component:SportsUiComponent,

  },
  {
    path: 'sport',
    component: SportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
