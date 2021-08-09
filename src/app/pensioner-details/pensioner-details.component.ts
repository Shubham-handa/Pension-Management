import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionerDetail } from '../model/PensionerDetail';
import { Service } from '../policy-service/service';

@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
  styleUrls: ['./pensioner-details.component.css']
})
export class PensionerDetailsComponent implements OnInit {
 detailsList:PensionerDetail[]=[]
  constructor(private service:Service,private router:Router ) { }

  ngOnInit() {
    this.service.pensionerDetails().subscribe(data =>{
     this.detailsList=data 
    })
  }

  home=function(){
    this.router.navigateByUrl('/home')
  };

}
