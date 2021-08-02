import {Routes} from "@angular/router";
import {CharactersComponent} from "../commponents/characters/characters.component";
import {LocationsComponent} from "../commponents/locations/locations.component";
import {EpisodesComponent} from "../commponents/episodes/episodes.component";
import {AboutCharacterComponent} from "../commponents/about-character/about-character.component";
import {AboutLocationComponent} from "../commponents/about-location/about-location.component";
import {AboutEpisodeComponent} from "../commponents/about-episode/about-episode.component";

export const routes: Routes = [
  {path: 'characters/:id', component: CharactersComponent},
  {path: 'locations/:id', component: LocationsComponent},
  {path: 'episodes/:id', component: EpisodesComponent},
  {path: 'character/:id', component: AboutCharacterComponent},
  {path: 'location/:id', component: AboutLocationComponent},
  {path: 'episode/:id', component: AboutEpisodeComponent},

]
