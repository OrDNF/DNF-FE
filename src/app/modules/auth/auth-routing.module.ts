import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [{
  path:"",component:AuthComponent,children:[{
    path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
