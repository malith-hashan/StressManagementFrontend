import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {SignUpRequestModle} from "../modules/signUpRequestModle";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  constructor(private userService:UserService,
              private router:Router
              ) {
  }
  ngOnInit() {
  }
  signup =new FormGroup({
  username:new FormControl('',[Validators.required]),
  email :new FormControl('',[Validators.required]),
  password :new FormControl('',[Validators.required])
  })



  addUser(): void {
    // // Extract the values from the form group
    // const username1 = this.signup.get('username')?.value;
    // const emai1l = this.signup.get('email')?.value;
    // const password1 = this.signup.get('password')?.value;


    const user:SignUpRequestModle=<SignUpRequestModle>{
      username:this.signup.get('username')?.value,
      email:this.signup.get('email')?.value,
      roles:['user'],
      password:this.signup.get('password')?.value

    }

    console.log(user)
    this.userService.signUP(user).subscribe(
      (responce:any)=> {

        this.signup.reset();
        window.location.reload();
        console.log(responce)
        console.log("sucess")
      },
      error => {
        // alert(error.message )
        this.signup.reset();
        alert("user registration Success")
        console.log("message is : "+error)
        this.router.navigate(['/SignIn'])
      }

    )
  }

}





