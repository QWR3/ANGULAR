import {Component, OnInit, Input} from '@angular/core';
import {IDogModel} from "../../model/IDogModel";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  dog: IDogModel = {
    id: 0,
    weight: {imperial: 0, metric: 0},
    height: {imperial: 0, metric: 0},
    bred_for: '',
    breed_group: '',
    image: {height: 0, width: 0, id: '', url: ''},
    life_span: '',
    name: '',
    reference_image_id: '',
    origin: '',
    temperament: ''
  }
}
