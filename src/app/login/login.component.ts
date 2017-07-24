import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }
  // handle Login Form Authentication
  login(e) {
    e.preventDefault();
    console.log(e);
    const data = {email: e.target.elements[0].value, password: e.target.elements[1].value};
    console.log(data);
    this.http.post('http://localhost:3030/authentication', data)
        .subscribe(
          response => {
            console.log(response.json());
            localStorage.setItem('token', response.json().accessToken);
            this.router.navigate(['home']);
          },
          error => {
            console.log(error);
          }
        );
  }

}
