import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ViewAllserveysComponent } from "../adminServey/view-allserveys/view-allserveys.component";
import { UserServerViewComponent } from "../user-server-view/user-server-view.component";
import { UserServeyViewByAdminComponent } from "../user-servey-view-by-admin/user-servey-view-by-admin.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private matDialog: MatDialog,
    private router: Router,
  ) {
  }
  public goToViewAllServeyComponent() {
    this.matDialog.open(ViewAllserveysComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '60%',
    });
  }
  public goToUserServeyViewComponent() {
    this.matDialog.open(UserServeyViewByAdminComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '60%',
    });

  }
}
