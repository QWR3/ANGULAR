import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CharactersComponent} from './commponents/characters/characters.component';
import {LocationsComponent} from './commponents/locations/locations.component';
import {EpisodesComponent} from './commponents/episodes/episodes.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import {HttpClientModule} from "@angular/common/http";
import { CharacterComponent } from './commponents/character/character.component';
import { EpisodeComponent } from './commponents/episode/episode.component';
import { LocationComponent } from './commponents/location/location.component';
import { PageComponent } from './commponents/page/page.component';
import { AboutCharacterComponent } from './commponents/about-character/about-character.component';
import { AboutLocationComponent } from './commponents/about-location/about-location.component';
import { AboutEpisodeComponent } from './commponents/about-episode/about-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    CharacterComponent,
    EpisodeComponent,
    LocationComponent,
    PageComponent,
    AboutCharacterComponent,
    AboutLocationComponent,
    AboutEpisodeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
