import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() msgError: string;

  user = {
    user: '',
    email: '',
    password: '',
    password2: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  signupUsuario(){
    if(this.user.password != this.user.password2) return this.msgError='Contraseñas no coinciden'
    this.authService.signupUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => this.msgError=err.error
    )
    

  }

}
