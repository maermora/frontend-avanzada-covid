import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ListComponent } from './modules/list/list.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from 'src/app/auth/auth.guard'
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'signup',
    component: SigninComponent,
    canActivate: [AuthGuard]
  }]
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
