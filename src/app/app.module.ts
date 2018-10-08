import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

const appRoutes:Routes = [
  { path:'', component: LoginFormComponent },
  { path:'dashboard', canActivate : [AuthguardGuard], component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
