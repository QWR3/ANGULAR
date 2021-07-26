import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPhotoModel} from "../model/IPhotoModel";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient:HttpClient) {
  }
  getPhotos():Observable<IPhotoModel[]>{
    return this.httpClient.get<IPhotoModel[]>("https://jsonplaceholder.typicode.com/photos")
  }
}
