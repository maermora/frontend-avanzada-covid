import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
) { }

  ngOnInit() {
  }

  loginUsuario(){
      console.log(this.user);
      this.authService.loginUser(this.user)
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('user',res.login_user);
            localStorage.setItem('email',res.login_email);
            this.router.navigate(['/home']);
            
          },
          err => console.log(err)
        )
  }

}
