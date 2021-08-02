import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from "../../models/ILocation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input()
  location: ILocation

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getLocation() {
    this.router.navigate(['location', this.location.id], {state: this.location})

  }

}
