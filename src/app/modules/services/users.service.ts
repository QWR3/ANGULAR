import {Injectable} from '@angular/core';
import {UserInterface} from "../interfaces/user.interface";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>("https://jsonplaceholder.typicode.com/users")
  }

  getUser(id: number): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>("https://jsonplaceholder.typicode.com/users" + id)
  }
}
