import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  inc():void{
    this.dataService.incCounter()
  }
  dec():void{
    this.dataService.decCounter()
  }

}
