import {Component, OnInit} from '@angular/core';
import {DogsService} from "../../services/dogs.service";
import {IDogModel} from "../../model/IDogModel";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs: IDogModel[] = [{
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
  }]

  constructor(private dogsService: DogsService) {
    this.dogsService.getDogs().subscribe(value => this.dogs=value)
  }

  ngOnInit(): void {
  }

}
