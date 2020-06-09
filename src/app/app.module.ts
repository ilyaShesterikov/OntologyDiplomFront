import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DownloadOwlComponentComponent} from './download-owl/download-owl.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SelectIndividualsComponentComponent} from './select_individuals/select-individuals.component';
import {CreateDBComponentComponent} from './create-db/create-db.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DownloadOwlComponentComponent,
    SelectIndividualsComponentComponent,
    CreateDBComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
