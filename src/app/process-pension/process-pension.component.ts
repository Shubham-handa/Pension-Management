import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProcessPensionInput } from '../model/ProcessPensionInput';
import { Service } from '../policy-service/service';

@Component({
  selector: 'app-process-pension',
  templateUrl: './process-pension.component.html',
  styleUrls: ['./process-pension.component.css']
})
export class ProcessPensionComponent implements OnInit {
  processPensionOutput:any
  constructor(private service:Service, private router:Router, private appComponent:AppComponent) { }

  ngOnInit() {
  }

  processPension(pensionInput:ProcessPensionInput){
    console.log(pensionInput)
    this.service.processPension(pensionInput).subscribe(data=>{
     // this.router.navigate(["/processPension"]);
     this.processPensionOutput=localStorage.getItem("pension")
    });
    

  }

  home=function(){
    this.router.navigateByUrl('/home')
  };
}
