import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [LoginComponent, ErrorComponent, RegisterComponent, ForgotpasswordComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
