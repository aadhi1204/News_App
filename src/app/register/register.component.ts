import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User =  new User();
  users: User[]=[];
  checkPassword: String='';
  result: User[]=[];
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {

  }
  OnClick()
  {
  }
  goHome()
  {
    this.router.navigate(["/home"]);
  }
  doRegister()
  {
    this.userService.doRegister().subscribe(data=>{this.users=data;});
    this.users.forEach(user => {
      console.log(user)
    });
  }
}
