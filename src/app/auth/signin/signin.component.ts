import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  signupUsuario(){
    console.log(this.user);
    this.authService.signupUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user',res.signed_user);
        localStorage.setItem('email',res.signed_email);
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    )

  }

}
