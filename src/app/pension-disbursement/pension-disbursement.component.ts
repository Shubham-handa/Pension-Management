import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProcessPensionInput } from '../model/ProcessPensionInput';
import { Service } from '../policy-service/service';

@Component({
  selector: 'app-pension-disbursement',
  templateUrl: './pension-disbursement.component.html',
  styleUrls: ['./pension-disbursement.component.css']
})
export class PensionDisbursementComponent implements OnInit {
  code: any;

  constructor(private service: Service, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  pensionDisbursement(pensionInput: ProcessPensionInput) {
    console.log(pensionInput);

    this.service.disbursement(pensionInput).subscribe(data => {
     // this.router.navigate(["/processPension"]);
     console.log(data);
     this.code = localStorage.getItem('status');
    });


  }
  home = function() {
    this.router.navigateByUrl('/home');
  };
}
