import { ServeyServiceService } from "../service/servey-service.service";
import { FormBuilder } from "@angular/forms";
import { QuectionServiceService } from "../service/quection-service/quection-service.service";
import { SharedService } from "../service/shared.service";
import { UserAuthService } from "../service/user-auth.service";
import { ElementRef, Renderer2 } from '@angular/core';

import { IQuectionNew } from "../modules/quectionModle/quectionModleForServey";
import { UserData } from "../modules/userEnterdServeyModle";
import { IQuection } from "../modules/quectionModle/quectionModle";
import { Component } from "@angular/core";

@Component({
  selector: 'app-servey', templateUrl: './servey.component.html', styleUrls: ['./servey.component.css']
})
export class ServeyComponent {
  userId: string = '';
  quections: IQuectionNew[] = [];
  formModal: any;
  userResult: any;
  UserName: any;

  constructor(private fb: FormBuilder,
    private serveyService: ServeyServiceService,
    private quectionservice: QuectionServiceService,
    private sharedService: SharedService,
    private userAuth: UserAuthService,
    private elRef: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.UserName = this.userAuth.getUsername();
    this.quectionservice.GettAllQuectionForServey().subscribe((respoce: IQuectionNew[]) => {
      this.quections = respoce;
      console.log(respoce);
    }, (error) => {
      console.log(error);
    });
  }

  onSubmit(form: any) {
    let answerRequest: any = {}
    for (let i = 0; i < this.quections.length; i++) {
      const questionName = this.quections[i].quectionName;
      const answer = +(form.value[`answer${i}`]);
      answerRequest[questionName] = answer
    }
    var testModle_101: any = {
      userId: this.userId, answers: [answerRequest]
    }
    this.serveyService.createServey(testModle_101).subscribe(
      (responce: any) => {
        console.log(responce);
        console.log(responce.userResult)
        this.userResult = responce.userResult;
      }
    )
    const modelDiv = document.getElementById('exampleModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block'
      console.log("modle work")
    }
    const modal = this.elRef.nativeElement.querySelector('#myModal');
    this.renderer.addClass(modal, 'show');
    this.renderer.setStyle(modal, 'display', 'block');
    this.sharedService.setMethodID(+(this.userId))
  }
  openModal() {
    this.formModal.show();
  }
  closeModal() {
    const modal = this.elRef.nativeElement.querySelector('#myModal');
    this.renderer.addClass(modal, 'hide');
    this.renderer.setStyle(modal, 'display', 'none');
    this.formModal.hide();
  }
}
