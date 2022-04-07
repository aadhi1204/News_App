import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookmarkStatus: boolean = false;
  searchStatus: boolean=false;
  constructor(private router : Router) { }
  url: String="http://localhost:8082/newsapi.org/";
  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.router.navigate(['login']);
    // },10000);
  }
  Register(){
    this.router.navigate(['/register'])
  }
  Login(){
    this.router.navigate(['/login'])
  }
}
