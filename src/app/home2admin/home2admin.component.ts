import { Component } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-home2admin',
  templateUrl: './home2admin.component.html',
  styleUrls: ['./home2admin.component.css']
})
export class Home2adminComponent {
  constructor(private userAuthService: UserAuthService) {
  }
  userName: any = this.userAuthService.getUsername();

}
