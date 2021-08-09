import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionerDetail } from '../model/PensionerDetail';
import { Service } from '../policy-service/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consumerBusinessCreate: string;
  consumerBusinessUpdate: string;
  businessPropertyCreate: string;
  businessPropertyUpdate: string;
  details: PensionerDetail[] = [];
  constructor(private service: Service, private router: Router) { }

  ngOnInit() {
  }
  pensionerDetails = function() {
     this.router.navigateByUrl('/pensionerDetails');
      // this.service.pensionerDetails().subscribe(data => {
      //   this.router.navigate(['/pensionerDetails']);
      //   });

};
pensionDisbursement = function() {
  this.router.navigateByUrl('/pensionDisbursement');
};
pensionDetail = function() {
  this.router.navigateByUrl('/pensionDetail');
};
processPension = function() {
  this.router.navigateByUrl('/processPension');
};
pensionerByAaadhar = function() {
  this.router.navigateByUrl('/pensionerByAaadhar');

};
logout = function() {
  this.router.navigateByUrl('/login');
};

}
