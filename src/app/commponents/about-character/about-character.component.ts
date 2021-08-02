import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ICharacter} from "../../models/ICharacter";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.scss']
})
export class AboutCharacterComponent implements OnInit {

  id: number
  character: ICharacter

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private charactersService: CharactersService) {
    this.activatedRoute.url.subscribe(value => {
      if (router.getCurrentNavigation()?.extras.state) {
        this.character = this.router.getCurrentNavigation()?.extras.state as ICharacter
      } else {
        this.activatedRoute.params.subscribe(({id}) => this.id = id)
        this.charactersService.getCharacter(this.id).subscribe(value => this.character = value)
      }
    })

  }

  ngOnInit(): void {
  }

  getPropsFromUrl(url: string): number {
    const splitUrl = url.split('/')
    return +splitUrl[splitUrl.length - 1]
  }

}
