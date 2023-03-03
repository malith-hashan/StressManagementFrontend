import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ViewQuectionsComponent} from "./quection/view-quections/view-quections.component";
import {ServeyComponent} from "./servey/servey.component";
import {EditQuectionsComponent} from "./quection/edit-quections/edit-quections.component";
import {AdminServeyHomeComponent} from "./adminServey/admin-servey-home/admin-servey-home.component";
import {ViewAllserveysComponent} from "./adminServey/view-allserveys/view-allserveys.component";
import {UserServerViewComponent} from "./user-server-view/user-server-view.component";

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'Quections',component:ViewQuectionsComponent},
  {path: 'Servey',component:ServeyComponent},
  {path: 'EditQuection/:id',component:EditQuectionsComponent},
  {path: 'AdminServeyView',component:ViewAllserveysComponent},
  {path: 'UserServeyView',component:UserServerViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
