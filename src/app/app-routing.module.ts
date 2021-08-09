import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PensionDetailComponent } from './pension-detail/pension-detail.component';
import { PensionDisbursementComponent } from './pension-disbursement/pension-disbursement.component';
import { PensionerByAadharComponent } from './pensioner-by-aadhar/pensioner-by-aadhar.component';
import { PensionerDetailsComponent } from './pensioner-details/pensioner-details.component';
import { ProcessPensionComponent } from './process-pension/process-pension.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  
  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"pensionerDetails",
    component:PensionerDetailsComponent
  },
  {
    path:"pensionDisbursement",
    component:PensionDisbursementComponent
  },
  {
    path:"pensionDetail",
    component:PensionDetailComponent
  },
  {
    path:"processPension",
    component:ProcessPensionComponent
  },
  {
    path:"pensionerByAaadhar",
    component:PensionerByAadharComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
