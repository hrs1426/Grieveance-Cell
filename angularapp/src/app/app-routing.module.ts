import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { IssueComponent } from './issue/issue.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'manage-user',component:ManageUserComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'developer-page',component:DeveloperPageComponent},
  {path:'manage-user',component:ManageUserComponent},
  {path:'user-home',component:UserHomeComponent },
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'issue',component:IssueComponent}
  // ,canActivate:[AuthGuard], data:{roles:['User']}
  // ,canActivate:[AuthGuard], data:{roles:['Admin']} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
