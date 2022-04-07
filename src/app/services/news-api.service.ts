import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) {}
   headLinesUrl='https://newsapi.org/v2/top-headlines?country=in&apiKey=4a00ff53ae6f4bbe90051ae7886a1de1';
   headLines():Observable<any>{
     return this.http.get(this.headLinesUrl);
   }
}
