import {Component, Input, OnInit} from '@angular/core';
import {IPhotoModel} from "../../model/IPhotoModel";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  photo:IPhotoModel={url:'',thumbnailUrl:'',title:'',albumId:0,id:0}

}
