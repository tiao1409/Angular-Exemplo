import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelloWorldComponent } from './wello-world/wello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';

@NgModule({
  declarations: [
    AppComponent,
    WelloWorldComponent,
    DataHoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
