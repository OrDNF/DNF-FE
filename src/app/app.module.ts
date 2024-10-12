import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { UserRoutingModule } from './modules/auth/user/user-routing.module';
import { HomeRoutingModule } from './modules/home-page/home-routing.module';
import { FeatureModuleRoutingModule } from './modules/feature-modules/feature-module-routing.module';
import { ListRoutingModule } from './modules/feature-modules/list-routing.module';
import { CommentComponent } from './modules/feature-modules/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomePageComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    UserRoutingModule,
    HomeRoutingModule,
    FeatureModuleRoutingModule,
    ListRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
