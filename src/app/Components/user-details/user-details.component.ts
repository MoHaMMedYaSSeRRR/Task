import { User } from './../../core/interfaces/user';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  constructor(
    private _UserService:UserService ,
    private _ActivatedRoute:ActivatedRoute
  )
  {}

  users:User={} as User;
  id:any ;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: res =>{
        this.id = res.get('id')
        console.log(this.id)
      }
    })

    this._UserService.getUserDetails(this.id).subscribe({
      next: result => {
        this.users = result.data;
        console.log(this.users);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
