import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url = 'https://jsonplaceholder.typicode.com/users/'

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.base_url)
  }

  getUser(id:number):Observable<IUser> {
    return this.httpClient.get<IUser>(this.base_url+id)
  }
}
