import {Component, OnInit} from '@angular/core';
import {ServeyServiceService} from "../../service/servey-service.service";
import {ServeyModle} from "../../modules/serveyModle/serveyModle";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-view-allserveys',
  templateUrl: './view-allserveys.component.html',
  styleUrls: ['./view-allserveys.component.css']
})
export class ViewAllserveysComponent implements OnInit{
  servey:ServeyModle[]=[];
  constructor(private serveyService:ServeyServiceService) {
  }
  ngOnInit() {
    this.getAllServeyDetails()
  }



  public getAllServeyDetails(){
    this.serveyService.getAllServeys().subscribe(
      (responce :ServeyModle[])=>{
        console.log("check!!!")
        this.servey =responce;
        console.log(responce)
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    );
  }




}
