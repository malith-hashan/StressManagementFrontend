import {Component, OnInit} from '@angular/core';
import {ServeyServiceService} from "../service/servey-service.service";
import {NgForm, Validators} from "@angular/forms";
import {IQuection} from "../modules/quectionModle/quectionModle";
import {ServeyModle} from "../modules/serveyModle/serveyModle";
import {QuectionServiceService} from "../service/quection-service/quection-service.service";
import {SharedService} from "../service/shared.service";
import {UserAuthService} from "../service/user-auth.service";
import {ServeyCreateModle} from "../modules/serveyModle/ServeyCreateModle";

import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'


import {IQuectionNew} from "../modules/quectionModle/quectionModleForServey";

@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.css']
})
export class ServeyComponent implements OnInit {
  myForm: FormGroup;

//   // @ts-ignore
//   empForm: FormGroup;
//   quections: IQuectionNew[] = [];
//
//   constructor(private fb: FormBuilder,
//               private serveyService: ServeyServiceService,
//               private quectionservice: QuectionServiceService,
//               private sharedService: SharedService,
//               private userAuth :UserAuthService,) {}
//
//   ngOnInit() {
//     this.empForm = this.fb.group({
//       employees: this.fb.array([])
//     });
//     this.quectionservice.GettAllQuectionForServey().subscribe(
//       (respoce: IQuectionNew[]) => {
//         this.quections = respoce;
//         console.log(respoce.length)
//         console.log(respoce);
//
//
//       },
//       (error) => {
//         console.log(error);
//       }
//     )
//   }
//
//   employees(): FormArray {
//     return this.empForm.get('employees') as FormArray;
//   }
//
//   newEmployee(): FormGroup {
//     return this.fb.group({
//       firstName: '',
//       lastName: '',
//       skills: this.fb.array([])
//     });
//   }
//
//   addEmployee() {
//     this.employees().push(this.newEmployee());
//   }
//
//   removeEmployee(empIndex: number) {
//     this.employees().removeAt(empIndex);
//   }
//
//   employeeSkills(empIndex: number): FormArray {
//     return this.employees()
//       .at(empIndex)
//       .get('skills') as FormArray;
//
//   }
//
//   newSkill(): FormGroup {
//     return this.fb.group({
//       skill: '',
//       exp: ''
//     });
//   }
//
//   addEmployeeSkill(empIndex: number) {
//     this.employeeSkills(empIndex).push(this.newSkill());
//   }
//
//   removeEmployeeSkill(empIndex: number, skillIndex: number) {
//     this.employeeSkills(empIndex).removeAt(skillIndex);
//   }
//
//   onSubmit() {
//     console.log(this.empForm.value);
//   }
// }
  userId =new FormControl();
  quection1=new FormControl();
  answer1=new FormControl();

  //answer2=new FormArray([])


  //userId:number =0;
  UserName: string = ""
  // quection:string=""
  quections: IQuectionNew[] = [];
  private NumberOfQuections: any;
  private quectionList: IQuectionNew[]=[];

  constructor(private fb:FormBuilder,
              private serveyService: ServeyServiceService,
              private quectionservice: QuectionServiceService,
              private sharedService: SharedService,
              private userAuth :UserAuthService,
  )

  {
    this.myForm = this.fb.group({
      myArray: this.fb.array([])
    });
  }

  ngOnInit() {
    // @ts-ignore
    this.UserName=this.userAuth.getUsername();
    //this.UserID = this.userAuth.getUserId();



    this.quectionservice.GettAllQuectionForServey().subscribe(
      (respoce: IQuectionNew[]) => {
        this.quections = respoce;
        this.NumberOfQuections =respoce.length;
        console.log(respoce.length)
        console.log(respoce);
        this.quectionList=respoce;

      },
      (error) => {
        console.log(error);
      }
    )

  }
  get myArray() {
    return this.myForm.get('myArray') as FormArray;
  }
 // item:FormArray<any>=this.myArray;





  createServey(value: any) {
    let requestToSend:ServeyCreateModle = {
      userid :this.userId.value,
      userAnswerdQuection:[
        {quectionName:this.quections[0].quectionName,answerValue:this.answer1.value},
        {quectionName:this.quections[1].quectionName,answerValue:this.answer1.value},
        {quectionName:this.quections[2].quectionName,answerValue:this.answer1.value},

      ]

    }
    console.log(requestToSend)
    this.sharedService.setMethodID(requestToSend.userid);

  }


}
