import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SelectRoleComponent } from './select-role/select-role.component';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';




@NgModule({
  declarations: [LoginComponent, ErrorComponent, ForgotpasswordComponent, SelectRoleComponent, RegisterShopComponent, RegisterCustomerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
