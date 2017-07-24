import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() { }
  signUp(e) {
    e.preventDefault();
    const signUpData = {email: e.target.elements[0].value, password: e.target.elements[1].value };

    this.http.post('http://localhost:3030/users', signUpData)
        .subscribe(
            response => {
              console.log(response.json());
              this.router.navigate(['/']);
            },
            error => {
              console.log(error);
            }
        );

  }

}
