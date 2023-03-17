import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {SignUpRequestModle} from "../modules/signUpRequestModle";
import {Router} from "@angular/router";
import {UserAuthService} from "../service/user-auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = new FormGroup({

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,30}$')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),

    // role: new FormControl('user', Validators.required)

  });


  constructor(
    private userAuthService: UserAuthService,
    private userService: UserService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
  }

  // matchPassword(control: AbstractControl) {
  //   const password = control.root.get('password');
  //   const confirmPassword = control.value;
  //   if (password && confirmPassword && password.value !== confirmPassword) {
  //     return { mismatchedPasswords: true };
  //   }
  //   return null;
  // }


  saveUser() {
    // // Extract the values from the form group
    // const username1 = this.signup.get('username')?.value;
    // const emai1l = this.signup.get('email')?.value;
    // const password1 = this.signup.get('password')?.value;


    const user:SignUpRequestModle=<SignUpRequestModle>{
      username:this.user.get('username')?.value,
      email:this.user.get('email')?.value,
      roles:['user'],
      password:this.user.get('password')?.value

    }

    console.log(user)
    this.userService.signUP(user).subscribe(
      (responce:any)=> {

        this.user.reset();
        window.location.reload();
        console.log(responce)
        console.log("sucess")
      },
      error => {
        // alert(error.message )
        this.user.reset();
        alert("user registration Success")
        console.log("message is : "+error)
        this.router.navigate(['/SignIn'])
      }

    )
  }

  }














//   constructor(private userService:UserService,
//               private router:Router
//               ) {
//   }
//   ngOnInit() {
//   }
//   signup =new FormGroup({
//   username:new FormControl('',[Validators.required]),
//   email :new FormControl('',[Validators.required]),
//   password :new FormControl('',[Validators.required])
//   })
//
//
//
//   addUser(): void {

//
// }





