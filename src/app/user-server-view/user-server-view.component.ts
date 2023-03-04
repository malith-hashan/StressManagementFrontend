import {Component, OnInit} from '@angular/core';
import {ServeyServiceService} from "../service/servey-service.service";
import {ServeyModle} from "../modules/serveyModle/serveyModle";
import {HttpErrorResponse} from "@angular/common/http";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!this is not working!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
@Component({
  selector: 'app-user-server-view',
  templateUrl: './user-server-view.component.html',
  styleUrls: ['./user-server-view.component.css']
})
export class UserServerViewComponent {

  public serveys:ServeyModle[]=[]
  id:number=6;

constructor(private serverService:ServeyServiceService,
            ) {
}
// ngOnInit() {
//     this.getAllServeyByUserId()
// }


  // onSubmit(){
  //   this.getAllServeyByUserId(inputId)
  //
  // }

  public getAllServeyByUserId(inputId:string){
    this.serverService.getServeyByUserId(+inputId).subscribe(
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

