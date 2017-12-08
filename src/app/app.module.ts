import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {NavbarModule} from './navbar/navbar.module';
import {AppRoutingModule} from "./app-routing.module";
import {MatSlideToggleModule} from "@angular/material";
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import { RoomComponent } from './room/room.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  keyboard: true
};


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    SidebarComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    NavbarModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
