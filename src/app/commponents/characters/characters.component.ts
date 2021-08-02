import {Component, OnInit} from '@angular/core';
import {CharactersService} from "../../services/characters.service";
import {ICharacter} from "../../models/ICharacter";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  page = 1
  characters: ICharacter[]

  constructor(private charactersService: CharactersService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => this.page = +id);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value =>
      this.charactersService.getAllCharacters(this.page).subscribe((value) => {
        this.characters = value.results
      }))

  }

}
