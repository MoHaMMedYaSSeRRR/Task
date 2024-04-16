import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'allusers' , pathMatch:'full'},
  {path:'allusers', component:UsersComponent},
  {path:'userdetails/:id', component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
