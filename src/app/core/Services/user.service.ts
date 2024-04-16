import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _HttpClient:HttpClient
  ) { }

  getAllUsers(pNum : number = 1):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${pNum}`)
  }
  getUserDetails(id: number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
