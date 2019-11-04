import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';
import { TariffService } from './services/tariff.service';

@NgModule({
  declarations: [
    AppComponent,
    TariffDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TariffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
