import { Component, OnInit } from '@angular/core';
import { UserAuthService } from "../service/user-auth.service";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  userName: any;
  constructor(private userAuth: UserAuthService) {
  }
  ngOnInit() {
    this.userName = this.userAuth.getUsername()
  }
}
