import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../models/ICharacter";
import {Router} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()
  character:ICharacter

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getCharacter(){
    this.router.navigate(['character',this.character.id],{state:this.character})
  }

}
