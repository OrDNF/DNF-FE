import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { BodyPageComponent } from './components/body-page/body-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomePageComponent,AdvertisementComponent,BodyPageComponent,CarouselComponent,FooterComponent,NavigationComponent],

  exports: [
      HomePageComponent
  ],
imports: [
  CommonModule,
  HomeRoutingModule,
  ReactiveFormsModule,
]
})
export class HomePageModule { }
