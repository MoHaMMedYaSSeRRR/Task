import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(
    private _UserService:UserService
  )
  {}
  currentPage :number=1;
  pageSize!: number;
  total!: number;
  searchTerm!:number;
  users:User[]=[];
  ngOnInit(): void {
    this._UserService.getAllUsers().subscribe({
      next: result => {
        this.users = result.data;
        this.pageSize=result.per_page;
        this.currentPage=result.page;
        this.total=result.total;
        console.log(this.users);
      },
      error: err => {
        console.log(err);
      }
    })
  }
  pageChanged(event:any):void {
    this._UserService.getAllUsers(event).subscribe({
      next: result => {
        this.users = result.data;
        this.pageSize=result.per_page;
        this.currentPage=result.page;
        this.total=result.total;
        console.log(this.users);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
