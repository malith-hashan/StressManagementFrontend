import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { UserAuthService } from "../service/user-auth.service";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  constructor(private userAuthService: UserAuthService,
    private location: Location) {
  }
  userName: any = this.userAuthService.getUsername();
}
