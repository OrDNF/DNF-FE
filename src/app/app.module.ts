import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { UserRoutingModule } from './modules/auth/user/user-routing.module';
import { HomeRoutingModule } from './modules/home-page/home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    UserRoutingModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
