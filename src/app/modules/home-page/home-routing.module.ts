import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyPageComponent } from './components/body-page/body-page.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: 'home'  , component: HomePageComponent, children: [
      {
        path: '', component: BodyPageComponent
      },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
