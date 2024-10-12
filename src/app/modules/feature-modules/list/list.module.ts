import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { ListRoutingModule } from './list-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './list.component';




@NgModule({
  declarations: [ListComponent],
  exports: [
    ListComponent
  ],
  imports: [
      CommonModule,
      ListRoutingModule,
      ToastrModule.forRoot(),
      ReactiveFormsModule,
      ToastrModule.forRoot({
          timeOut: 10000,
          progressBar: true,
          progressAnimation: 'increasing',
          preventDuplicates: true
      }),
      BrowserAnimationsModule,
      BrowserModule,
  ]
})
export class ListModule { }
