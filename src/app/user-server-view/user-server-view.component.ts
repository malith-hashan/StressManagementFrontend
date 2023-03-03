import {Component, OnInit} from '@angular/core';
import {ServeyServiceService} from "../service/servey-service.service";
import {ServeyModle} from "../modules/serveyModle/serveyModle";
import {HttpErrorResponse} from "@angular/common/http";


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!this is not working!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
@Component({
  selector: 'app-user-server-view',
  templateUrl: './user-server-view.component.html',
  styleUrls: ['./user-server-view.component.css']
})
export class UserServerViewComponent implements OnInit{

  public serveys:ServeyModle[]=[]

constructor(private serverService:ServeyServiceService,
            ) {
}
ngOnInit() {
    this.getAllServeyByUserId()
}

  id:number=7;
  onSubmit(){
    this.getAllServeyByUserId()

  }


  public getAllServeyByUserId(){
    this.serverService.getServeyByUserId(this.id).subscribe(
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

