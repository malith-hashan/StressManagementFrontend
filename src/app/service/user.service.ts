import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {UserAuthService} from "./user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API="http://localhost:8080/api/auth";
  requestHeader =new HttpHeaders({
    "No-Auth":"True"
  })
  constructor(private httpclient:HttpClient,
              private userAuthService : UserAuthService
  ) { }

  public login(loginData:NgForm){
    return this.httpclient.post(this.PATH_OF_API + "/signin",loginData,{headers:this.requestHeader})
  }



  // public roleMatch(allowedRoles:[string]) {
  //   let isMatch:boolean = false;
  //   const userRoles: any = this.userAuthService.getRoles();
  //
  //   if (userRoles != null && userRoles) {
  //     for (let i = 0; i < userRoles.length; i++) {
  //       for (let j = 0; j < allowedRoles.length; j++) {
  //         if (userRoles[i].roleName === allowedRoles[j]) {
  //           isMatch = true;
  //           return isMatch;
  //         } else {
  //           return isMatch;
  //         }
  //       }
  //     }
  //   }
  // }

}
