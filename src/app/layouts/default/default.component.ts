import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  user: String;
  email: String;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadUser();
   }

  loadUser(){
    this.user = localStorage.getItem('user');
    this.email = localStorage.getItem('email');
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
