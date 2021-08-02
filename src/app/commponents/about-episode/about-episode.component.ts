import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EpisodesService} from "../../services/episodes.service";
import {IEpisode} from "../../models/IEpisode";

@Component({
  selector: 'app-about-episode',
  templateUrl: './about-episode.component.html',
  styleUrls: ['./about-episode.component.scss']
})
export class AboutEpisodeComponent implements OnInit {

  id: number
  episode: IEpisode

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private episodesService: EpisodesService) {
    this.activatedRoute.url.subscribe(value => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.episode = this.router.getCurrentNavigation()?.extras.state as IEpisode
      } else {
        this.activatedRoute.params.subscribe(({id}) => this.id = +id)
        this.episodesService.getEpisode(this.id).subscribe(value => this.episode = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
