import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent, children: [{
      path: 'list-product', component: ListProductComponent,
    }]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
