import {Component, OnInit} from '@angular/core';
import {LocationsService} from "../../services/locations.service";
import {ILocation} from "../../models/ILocation";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  page = 1
  locations: ILocation[]

  constructor(private locationsService: LocationsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => this.page = +id);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value =>
      this.locationsService.getAllLocations(this.page).subscribe(value => {
        this.locations = value.results
      }))

  }

}
