import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
//import { QuectionComponent } from './modules/quectionModle/quection.component';
//import { QuectionServiceComponent } from './service/quection-service/quection-service.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

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
    //QuectionComponent,
   // QuectionServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
