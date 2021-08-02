import {Component, Input, OnInit} from '@angular/core';
import {IEpisode} from "../../models/IEpisode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode:IEpisode

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getAboutEpisode(){
    this.router.navigate(['/episode',this.episode.id],{state:this.episode})
  }

}
