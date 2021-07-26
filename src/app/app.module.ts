import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { DogsComponent } from './commponents/dogs/dogs.component';
import { DogComponent } from './commponents/dog/dog.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogComponent,
  ],
  imports: [BrowserModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
