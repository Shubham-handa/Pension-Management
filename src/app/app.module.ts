import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PensionerDetailsComponent } from './pensioner-details/pensioner-details.component';
import { PensionDisbursementComponent } from './pension-disbursement/pension-disbursement.component';
import { PensionDetailComponent } from './pension-detail/pension-detail.component';
import { ProcessPensionComponent } from './process-pension/process-pension.component';
import { PensionerByAadharComponent } from './pensioner-by-aadhar/pensioner-by-aadhar.component';
import { DevelopersComponent } from './developers/developers.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PensionerDetailsComponent,
    PensionDisbursementComponent,
    PensionDetailComponent,
    ProcessPensionComponent,
    PensionerByAadharComponent,
    DevelopersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
