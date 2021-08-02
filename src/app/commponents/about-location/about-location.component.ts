import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ILocation} from "../../models/ILocation";
import {LocationsService} from "../../services/locations.service";

@Component({
  selector: 'app-about-location',
  templateUrl: './about-location.component.html',
  styleUrls: ['./about-location.component.scss']
})
export class AboutLocationComponent implements OnInit {
  id: number
  location: ILocation

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private locationsService: LocationsService) {
    this.activatedRoute.params.subscribe(value => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.location = this.router.getCurrentNavigation()?.extras.state as ILocation
      } else {
        this.activatedRoute.params.subscribe(({id}) => this.id = +id)
        this.locationsService.getLocation(this.id).subscribe(value => this.location = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
