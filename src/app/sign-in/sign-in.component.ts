import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../service/user.service";
import {UserAuthService} from "../service/user-auth.service";
import {Router} from "@angular/router";
import {SharedService} from "../service/shared.service";
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {ModalTemplateComponent} from "../modal-template/modal-template.component";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  implements OnInit{
  constructor(private userservice: UserService,
              private userAuthService: UserAuthService,
              private router :Router,
              private sharedService :SharedService,
              private matDialog:MatDialog) {
  }
  ngOnInit() { document.body.className = "selector";
  }

  login(loginForm: NgForm) {
    this.userservice.login(loginForm.value).subscribe(
      (responce:any) => {
        console.log(responce);
        console.log(responce.token)
        console.log(responce.roles);
        console.log(responce.username)
        console.log(responce.id)
        this.userAuthService.setRoles(responce.roles);
        this.userAuthService.setToken(responce.token);
        this.userAuthService.setUserName(responce.username);
        this.sharedService.setMethodID(responce.id);
        this.sharedService.setMethodName(responce.username)

        const role=responce.roles[0];
        if(role=== 'ROLE_ADMIN'){
          this.router.navigate(['/admin'])
        }else(role==='ROLE_USER')
        this.router.navigate(['/home'])

      },
      (error) => {
        console.log(error);
        const errorMsg = "Invalid username or password";
        this.openErrorModal(errorMsg);
      }
    )

  }
  gotoSignup(){
    console.log("signup button work")
    this.router.navigate(['/SignUp'])

  }

  openErrorModal(errorMsg: string) {
    const dialogRef = this.matDialog.open(ModalTemplateComponent, {
      data: { message: errorMsg },
    });
  }


}
