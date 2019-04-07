import { Component, OnInit } from '@angular/core';
import axios from "axios"
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
email:String;
password:String;
confirm_password:String;
firstname:String ;
lastname :String;


  ngOnInit() {
  }

  register() {
    if (this.email == "" || this.password == ""  || this.confirm_password == "" || this.firstname == ""|| this.lastname == "") {
      alert("vide");
    } else {
      

      axios.post("http://192.168.9.95:1337/register", {
          username: this.email,
          password: this.password,
          email :this.email,
          firstname:this.firstname,
          lastname:this.lastname
        })
        .then(res => {
          //console.log(res.data.user);
          
          this.router.navigate(["home"]);
        });
        
    }
  }

}
