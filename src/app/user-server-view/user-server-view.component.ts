import { Component, OnInit } from '@angular/core';
import { ServeyServiceService } from "../service/servey-service.service";
import { ServeyModle } from "../modules/serveyModle/serveyModle";
import { HttpErrorResponse } from "@angular/common/http";
import { toNumbers } from "@angular/compiler-cli/src/version_helpers";
import { SharedService } from "../service/shared.service";
import { UserAuthService } from "../service/user-auth.service";

@Component({
  selector: 'app-user-server-view',
  templateUrl: './user-server-view.component.html',
  styleUrls: ['./user-server-view.component.css']
})
export class UserServerViewComponent implements OnInit {

  public serveys: ServeyModle[] = [];

  constructor(private serverService: ServeyServiceService,
    private sharedservice: SharedService,
    private authService: UserAuthService
  ) {
  }
  ngOnInit() {
  }
  username1: any = this.authService.getUsername();
  idNumber: number = this.sharedservice.getMethodID();
  public getAllServeyByUserId(inputId: string) {
    this.serverService.getServeyByUserId(this.idNumber).subscribe(
      (responce: ServeyModle[]) => {
        this.serveys = responce;
        console.log(responce)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
}
