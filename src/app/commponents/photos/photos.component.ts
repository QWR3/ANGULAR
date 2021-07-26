import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";
import {IPhotoModel} from "../../model/IPhotoModel";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: IPhotoModel[] = [{id: 0, albumId: 0, thumbnailUrl: '', url: '', title: ''}]

  constructor(private photosService: PhotosService) {
    this.photosService.getPhotos().subscribe(value => this.photos = value)
  }

  ngOnInit(): void {
  }

}
