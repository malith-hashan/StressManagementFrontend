import {Component, OnInit} from '@angular/core';
import {ServeyServiceService} from "../service/servey-service.service";
import {QuectionServiceService} from "../service/quection-service/quection-service.service";
import {SharedService} from "../service/shared.service";
import {UserAuthService} from "../service/user-auth.service";
import {IQuectionNew} from "../modules/quectionModle/quectionModleForServey";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-servey-track',
  templateUrl: './servey-track.component.html',
  styleUrls: ['./servey-track.component.css']
})
export class ServeyTrackComponent implements OnInit{

  quections: IQuectionNew[] = [];

  q1:string =this.quections[0].quectionName;

  servey=new FormGroup({
    userId:new FormControl(),
    quection1:new FormControl(),
    answer1:new FormControl()
  })




ngOnInit() {console.log(this.q1);this.quectionservice.GettAllQuectionForServey().subscribe(
  (respoce: IQuectionNew[]) => {
    this.quections = respoce;
    console.log(respoce.length)
    console.log(respoce);


  },
  (error) => {
    console.log(error);
  }
)

}

  constructor( private serveyService: ServeyServiceService,
               private quectionservice: QuectionServiceService,
               private sharedService: SharedService,
               private userAuth :UserAuthService,) {
  }






}
