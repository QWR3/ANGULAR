import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  counter: number

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCounter().subscribe(value => {
      return this.counter = value;
    })
  }

}
