import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { UserRoutingModule } from './modules/auth/user/user-routing.module';
import { HomeRoutingModule } from './modules/home-page/home-routing.module';

import { AdminModule } from './modules/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthRoutingModule,
    UserRoutingModule,
    HomeRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
