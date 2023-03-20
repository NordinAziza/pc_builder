import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { PcBuilderComponent } from './pc-builder/pc-builder.component';
import { PersonalizePcComponent } from './personalize-pc/personalize-pc.component';


@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    PcBuilderComponent,
    PersonalizePcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
