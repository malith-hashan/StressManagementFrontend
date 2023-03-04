import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ViewQuectionsComponent} from "./quection/view-quections/view-quections.component";
import {ServeyComponent} from "./servey/servey.component";
import {EditQuectionsComponent} from "./quection/edit-quections/edit-quections.component";
import {ViewAllserveysComponent} from "./adminServey/view-allserveys/view-allserveys.component";
import {UserServerViewComponent} from "./user-server-view/user-server-view.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Quections', component: ViewQuectionsComponent},
  {path: 'Servey', component: ServeyComponent},
  {path: 'EditQuection/:id', component: EditQuectionsComponent},
  {path: 'AdminServeyView', component: ViewAllserveysComponent},
  {path: 'UserServeyView', component: UserServerViewComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'Forbidden', component: ForbiddenComponent},

  {path: 'admin', component: AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
