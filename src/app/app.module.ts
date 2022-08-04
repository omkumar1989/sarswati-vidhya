import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/user/home/home.component';
import { StudentComponent } from './components/student/student/student.component';
import { TeacherComponent } from './components/teacher/teacher/teacher.component';
import { ManagerComponent } from './components/manager/manager/manager.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnathorizedComponent } from './components/error/unathorized/unathorized.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { SheetJSComponent } from './components/user/home/sheetjs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent,
    ManagerComponent,
    NotFoundComponent,
    UnathorizedComponent,
    SheetJSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
