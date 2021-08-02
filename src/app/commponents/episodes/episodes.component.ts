import {Component, OnInit} from '@angular/core';
import {EpisodesService} from "../../services/episodes.service";
import {IEpisode} from "../../models/IEpisode";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  page = 1
  episodes: IEpisode[]

  constructor(private episodesService: EpisodesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => this.page = +id);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value =>
      this.episodesService.getAllEpisodes(this.page).subscribe(value => {
        this.episodes = value.results
      }))

  }

}
