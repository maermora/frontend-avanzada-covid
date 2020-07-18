import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user) {
    return this.http.post<any>(this.URL + '/login', user)
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }

}
