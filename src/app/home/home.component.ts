import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookmarkStatus: boolean = false;
  searchStatus: boolean=false;
  //constructor(private service:NewsApiService){}
  constructor(private router : Router,private service:NewsApiService) { }
  url: String="http://localhost:8082/newsapi.org/";
  headLinesResult:any=[];
  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.router.navigate(['login']);
    // },10000);
    this.service.headLines().subscribe((result)=>{
      console.log(result);
      this.headLinesResult=result.articles;
    })
  }
  Register(){
    this.router.navigate(['/register'])
  }
  Login(){
    this.router.navigate(['/login'])
  }
}
