import { Component, OnInit, ViewChild } from '@angular/core';
import { ServeyServiceService } from "../service/servey-service.service";
import { NgForm, Validators } from "@angular/forms";
import { IQuection } from "../modules/quectionModle/quectionModle";
import { ServeyModle } from "../modules/serveyModle/serveyModle";
import { QuectionServiceService } from "../service/quection-service/quection-service.service";
import { SharedService } from "../service/shared.service";
import { UserAuthService } from "../service/user-auth.service";
import { ServeyCreateModle } from "../modules/serveyModle/ServeyCreateModle";

import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'


import { IQuectionNew } from "../modules/quectionModle/quectionModleForServey";

@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.css']
})
export class ServeyComponent implements OnInit {


  myForm: FormGroup;


  //answer2=new FormArray([])


  //userId:number =0;
  UserName: string = ""
  // quection:string=""
  quections: IQuectionNew[] = [];

  private NumberOfQuections: any;
  private quectionList: IQuectionNew[] = [];


  servey = new FormGroup({

  })


  constructor(private fb: FormBuilder,
    private serveyService: ServeyServiceService,
    private quectionservice: QuectionServiceService,
    private sharedService: SharedService,
    private userAuth: UserAuthService,
  ) {
    this.myForm = this.fb.group({
      myArray: this.fb.array([])
    });
  }


  ngOnInit() {
    // @ts-ignore
    this.UserName = this.userAuth.getUsername();
    //this.UserID = this.userAuth.getUserId();



    this.quectionservice.GettAllQuectionForServey().subscribe(
      (respoce: IQuectionNew[]) => {
        this.quections = respoce;
        this.NumberOfQuections = respoce.length;
        console.log(respoce.length)
        console.log(respoce);
        this.quectionList = respoce;

      },
      (error) => {
        console.log(error);
      }
    )
    // this.createForm()

  }
  get myArray() {
    return this.myForm.get('myArray') as FormArray;
  }
  // item:FormArray<any>=this.myArray;

  // createForm(){
  //   this.servey=this.fb.group({
  //     userId:[''],
  //     quection1:[''],
  //     answer:['']
  //   })

  // }


  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
      // You can perform further actions with the form value here
      
    }
  }



  createServey() {

    console.log(this.servey.get('userId')?.value)
    console.log(this.servey.get('answer${0}')?.value)
    // let requestToSend:ServeyCreateModle = {
    //   userid :this.userId.value,
    //   userAnswerdQuection:[
    //     {quectionName:this.servey.get(['']),answerValue:this.servey.get('answer${0}')},
    //     {quectionName:this.quections[1].quectionName,answerValue:this.servey.get(['answer${index}'])},
    //     {quectionName:this.quections[2].quectionName,answerValue:this.answer1.value},
    //
    //   ]
    //
    // }
    // console.log(requestToSend)
    // this.sharedService.setMethodID(requestToSend.userid);

  }


}
