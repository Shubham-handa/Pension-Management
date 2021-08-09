import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionDetail } from '../model/PensionDetail';
import { PensionerDetail } from '../model/PensionerDetail';
import { PensionerInput } from '../model/PensionerInput';

import { Service } from '../policy-service/service';

@Component({
  selector: 'app-pension-detail',
  templateUrl: './pension-detail.component.html',
  styleUrls: ['./pension-detail.component.css']
})
export class PensionDetailComponent implements OnInit {
  p:PensionDetail
  constructor(private service:Service, private router:Router) { }

  ngOnInit() {
  }
  getPensionDetail(pension:PensionerInput){
    console.log(pension)
    this.service.pensionDetail(pension).subscribe(data=>{
     // this.router.navigate(["/processPension"]);
     //this.result=localStorage.getItem("status")
     this.p=data
     console.log(this.p)
    });
  }
  home=function(){
    this.router.navigateByUrl('/home')
  };

}
