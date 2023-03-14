import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewQuectionsComponent } from './quection/view-quections/view-quections.component';
import { EditQuectionsComponent } from './quection/edit-quections/edit-quections.component';
import { ServeyComponent } from './servey/servey.component';
import { ServeyTrackComponent } from './servey-track/servey-track.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UserTrackComponent } from './user-track/user-track.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatRadioModule} from '@angular/material/radio';
//import { QuectionComponent } from './modules/quectionModle/quection.component';
//import { QuectionServiceComponent } from './service/quection-service/quection-service.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddQuectionComponent } from './dialogBox/add-quection/add-quection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table';
import { ViewAllserveysComponent } from './adminServey/view-allserveys/view-allserveys.component';
import { AdminServeyHomeComponent } from './adminServey/admin-servey-home/admin-servey-home.component';
import { UserServerViewComponent } from './user-server-view/user-server-view.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import {UserService} from "./service/user.service";
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { UserAlResultComponent } from './user-al-result/user-al-result.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { UserServeyViewByAdminComponent } from './user-servey-view-by-admin/user-servey-view-by-admin.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewQuectionsComponent,
    EditQuectionsComponent,
    ServeyComponent,
    ServeyTrackComponent,
    ViewAllUsersComponent,
    UserTrackComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    AddQuectionComponent,
    ViewAllserveysComponent,
    AdminServeyHomeComponent,
    UserServerViewComponent,
    ForbiddenComponent,
    AdminComponent,
    AuthComponent,
    UserAlResultComponent,
    UserServeyViewByAdminComponent,
    ModalTemplateComponent,
    //QuectionComponent,
   // QuectionServiceComponent
  ],
    imports: [

        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        MatRadioModule,
        MatDialogModule,
        HttpClientModule,
        MatTableModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule

    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
