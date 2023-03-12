import { Injectable } from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userId:number=0
  userName:string=""
  constructor() { }

  setMethodID(data: number){
    this.userId=data;
  }

  getMethodID(){
    return this.userId
  }
  setMethodName(data:string){
    this.userName=data;
  }
  getMethodName(){
    return this.userName
  }
}
