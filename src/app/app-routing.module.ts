import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ListComponent } from './modules/list/list.component';
import { AddComponent } from './modules/add/add.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from 'src/app/auth/auth.guard'

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'add',
    component: AddComponent
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
