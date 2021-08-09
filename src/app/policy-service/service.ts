import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { ProcessPensionInput } from '../model/ProcessPensionInput';
import { ProcessPensionResponse } from '../model/ProcessPensionResponse';
import { PensionerInput } from '../model/PensionerInput';
import { PensionerDetail } from '../model/PensionerDetail';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:comment-format
    //return this.http.post<any>("http://auth-lb-pod3-1537775790.ap-southeast-1.elb.amazonaws.com/auth/api/v1/authenticate", user)

  // credentials(user: User) {
  //   return this.http.get<any>('http://localhost:800/authenticate');
  // }

  authenticate(user: User) {
    return this.http.post<any>('http://localhost:8084/authenticate', user)
    .pipe(map(data => {
      localStorage.setItem('token', data.token);
    }));
  }
  pensionerDetails() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>('http://localhost:8200/pensioner/api/v1/getAllPensioner', {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))});
   // tslint:disable-next-line:max-line-length
   // return this.http.get<any>("htt://lb-pensionerdetail-1472919262.ap-southeast-1.elb.amazonaws.com/pensioner/api/v1/getAllPensioner",{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})

  }
  // tslint:disable-next-line:typedef-whitespace
  processPension(pensionInput: ProcessPensionInput) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>('http://localhost:8100/process/api/v1/ProcessPension', pensionInput, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
    // tslint:disable-next-line:max-line-length
    // return this.http.post<any>("http://processpension-lb-2027432997.ap-southeast-1.elb.amazonaws.com/process/api/v1/ProcessPension", pensionInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
    .pipe(map(data => {
     localStorage.setItem('pension', data.processPensionStatusCode);
    }));

  }
  disbursement(pension: ProcessPensionInput) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>('http://localhost:8300/disbursement/api/v1/disbursePension', pension, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
    // tslint:disable-next-line:max-line-length
    // return this.http.post<any>("http://lb-disbursement-728547974.ap-southeast-1.elb.amazonaws.com/disbursement/api/v1/disbursePension", pension,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
  .pipe(map(data => {
     localStorage.setItem('status', data.processPensionStatusCode);
    }));

  }
  pensionDetail(pensionerInput: PensionerInput) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>('http://localhost:8100/process/api/v1/PensionDetail', pensionerInput, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))});
   // tslint:disable-next-line:max-line-length
   // return this.http.post<any>("http://processpension-lb-2027432997.ap-southeast-1.elb.amazonaws.com/process/api/v1/PensionDetail", pensionerInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})


  }
  detailsByAadhar(aadharNumber: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<PensionerDetail>(' http://localhost:8200/pensioner/api/v1/PensionerDetailByAadhaar/' + aadharNumber, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))});
   // tslint:disable-next-line:max-line-length
   // return this.http.get<PensionerDetail>(" http://lb-pensionerdetail-1472919262.ap-southeast-1.elb.amazonaws.com/pensioner/api/v1/PensionerDetailByAadhaar/"+aadharNumber,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})


  }


}
