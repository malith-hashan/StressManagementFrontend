import { Component } from '@angular/core';
import {UserAuthService} from "../service/user-auth.service";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userAuthService: UserAuthService,
              private router:Router,
              public userService:UserService) {
  }
  public  isLogedin(){
    return this.userAuthService.isLoggedIn();
  }
  public isLogout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

}
