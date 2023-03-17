import { Component } from '@angular/core';
import {ServeyModle} from "../modules/serveyModle/serveyModle";
import {ServeyServiceService} from "../service/servey-service.service";
import {SharedService} from "../service/shared.service";
import {UserAuthService} from "../service/user-auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user-servey-view-by-admin',
  templateUrl: './user-servey-view-by-admin.component.html',
  styleUrls: ['./user-servey-view-by-admin.component.css']
})
export class UserServeyViewByAdminComponent {
public serveys:ServeyModle[]=[];
//id:number=0;


constructor(private serverService:ServeyServiceService,
  //private sharedservice:SharedService,
  private authService:UserAuthService,
) {
}
ngOnInit() {


}
username1:any=this.authService.getUsername();



public getAllServeyByUserId(inputId: string){
  this.serverService.getServeyByUserId(+(inputId)).subscribe(
    (responce :ServeyModle[])=>{
      this.serveys =responce;
      console.log(responce)

    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    }
  );



}
}
