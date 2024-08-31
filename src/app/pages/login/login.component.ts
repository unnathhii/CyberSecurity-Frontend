import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any = {
    "email": "",
    "password": ""
  };

  http = inject(HttpClient);
  
  constructor(private router:Router){

  }

  onLogin() {
    console.log("Inside Login");
    //Read forms fields
    // debugger;
    // this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any)=>{
    // this.http.post("http://localhost:8080/register-user/login", this.loginObj).subscribe((res:any)=>{
      this.http.post("http://localhost:8080/register-user/login", this.loginObj).subscribe((res:any)=>{
      // debugger;
      // debugger;
      // debugger;
      console.log(res);
      
      if(res) {
        alert("Login Success");
        localStorage.setItem("angular18Login",this.loginObj.email);
        this.router.navigateByUrl("dashboard");
      } else {
        alert("Check User Name or Password")
      }
    })

  }

}