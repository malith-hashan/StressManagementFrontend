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
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AddQuectionComponent } from './dialogBox/add-quection/add-quection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
