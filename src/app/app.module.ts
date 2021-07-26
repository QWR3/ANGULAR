import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { PhotosComponent } from './commponents/photos/photos.component';
import { PhotoComponent } from './commponents/photo/photo.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent,
  ],
  imports: [BrowserModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
