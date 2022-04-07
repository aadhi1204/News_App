import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: String = "http://localhost:8082/newsapi.org";
  result: String='';
  constructor(private httpClient:HttpClient) { }
  doRegister(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.url}/home`);
  }
}