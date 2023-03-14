

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
import { UserData } from "../modules/userEnterdServeyModle";

@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.css']
})
export class ServeyComponent {
  userId: string = '';
  quections1: any[] = []; // Your questions data
  answers: UserData[] = [];
  quections: IQuectionNew[] = [];


  constructor(private fb: FormBuilder,
    private serveyService: ServeyServiceService,
    private quectionservice: QuectionServiceService,
    private sharedService: SharedService,
    private userAuth: UserAuthService,
  ) {

  }



  ngOnInit() {
    // @ts-ignore
    this.UserName = this.userAuth.getUsername();
    //this.UserID = this.userAuth.getUserId();


    this.quectionservice.GettAllQuectionForServey().subscribe(
      (respoce: IQuectionNew[]) => {
        this.quections = respoce;

        console.log(respoce.length)
        console.log(respoce);


      },
      (error) => {
        console.log(error);
      }
    )
    // this.createForm()

  }




  // onSubmit(form: any) {
  //    let answers

  //   // Create an object for each question and its corresponding answer
  //   for (let i = 0; i < this.quections.length; i++) {
  //     const questionName = `problem${i + 1}`;
  //     const answer = +(form.value[`answer${i}`]);
  //     answers[questionName] = answer;
  //   }

  //   const requestToSend = {
  //     userId: this.userId,
  //     answers: [answers]
  //   };

  //   this.serveyService.createServey(requestToSend).subscribe();
  //   this.sharedService.setMethodID(+(this.userId));
  // }




  // onSubmit(form: any) {
  //   const userAnswers = new Map<string, number>();

  //   // Create a key-value pair for each question and its corresponding answer
  //   for (let i = 0; i < this.quections.length; i++) {
  //     const questionName = this.quections[i].quectionName;
  //     const answer = +(form.value[`answer${i}`]);
  //     userAnswers.set(questionName, answer);
  //   }

  //   // Add the map containing all the question-answer pairs to the answers array
  //   const answersArray = [userAnswers];

  //   // Create the request object
  //   const requestToSend: ServeyCreateModle = {
  //     userId: this.userId,
  //     answers: answersArray,
  //   };
  //   console.log("1234567789")
  //   console.log(userAnswers)

  //   console.log("1234567789")

  //   // Send the request to the backend
  //   this.serveyService.createServey(requestToSend).subscribe();
  //   this.sharedService.setMethodID(+(this.userId));
  // }





  onSubmit(form: any) {
    // console.log(form.value)
    // console.log(form.value['answer1'])

    let answerRequest: any = {

    }
    for (let i = 0; i < this.quections.length; i++) {
      const questionName = this.quections[i].quectionName;
      const answer = +(form.value[`answer${i}`]);
      // const map = new Map<string, number>([[questionName, answer]]);
      // userAnswerdQuection.push(map);
      answerRequest[questionName] = answer

    }

    var testModle_101: any = {
      userId: this.userId,
      answers: [

        answerRequest

      ]

    }





    var testModle_202: any = {
      userId: this.userId,
      answers: [

        [this.quections[0].quectionName, +(form.value['answer0'])],
        [this.quections[1].quectionName, +(form.value['answer1'])],
        [this.quections[2].quectionName, +(form.value['answer2'])],
        [this.quections[3].quectionName, +(form.value['answer3'])],
        [this.quections[4].quectionName, +(form.value['answer4'])],
        [this.quections[5].quectionName, +(form.value['answer5'])],
        [this.quections[6].quectionName, +(form.value['answer6'])],
        [this.quections[7].quectionName, +(form.value['answer7'])],
        [this.quections[8].quectionName, +(form.value['answer8'])],
        [this.quections[9].quectionName, +(form.value['answer9'])],
        [this.quections[1].quectionName, +(form.value['answer2'])],
      ]

    }



    const userAnswerdQuection: Array<Map<string, number>> = [];

    // Create a Map object for each question and its corresponding answer
    for (let i = 0; i < this.quections.length; i++) {
      const questionName = this.quections[i].quectionName;
      const answer = +(form.value[`answer${i}`]);
      const map = new Map<string, number>([[questionName, answer]]);
      userAnswerdQuection.push(map);
    }



    console.log(form.value)
    console.log(userAnswerdQuection)

    var requestToSend: ServeyCreateModle = {
      userId: this.userId,
      answers: userAnswerdQuection
    }
    console.log("this is reqest to send")
    console.log(requestToSend)
    console.log(testModle_202)
    console.log("finish")
    this.serveyService.createServey(testModle_101).subscribe()


    this.sharedService.setMethodID(+(this.userId))


    // Loop over each question in the form and get the selected answer
    // for (let i = 0; i < 10; i++) {
    //   console.log("start")
    //  question = this.quections[5].quectionName;
    //   let answer = form.value[`answer${i}`];
    //   //this.answers.push({ question, answer });
    //   console.log(answer)
    //   console.log(question)
    //   console.log("adadadasddasd")


    // Once you have all the answers, you can do whatever you want with them

  }





}



