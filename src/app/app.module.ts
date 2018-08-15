import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { ListKegComponent } from './list-keg/list-keg.component';



@NgModule({
  declarations: [
    AppComponent,
    EditKegComponent,
    NewKegComponent,
    ListKegComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
