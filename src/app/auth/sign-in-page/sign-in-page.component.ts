import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  inputModel: any;

  constructor(private router:Router,private http:HttpClient) { }
email:String;
password:String;
user={

  username:this.email,
  password:this.password
}
  ngOnInit() {
  }
  verif() {
    if (this.email == "" || this.password == "") {
      alert("vide");
    } else {
      this.user.username = this.email;
      this.user.password = this.password;

      this.http.post("http://192.168.9.95:1337/login", {
          username: this.user.username,
          password: this.user.password
        })
        .subscribe(res => {
          //console.log(res.data.user);
          
          this.router.navigate(["home"]);
        });
        
    }
  }

}
