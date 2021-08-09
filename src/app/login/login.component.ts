import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'util';
import { AppComponent } from '../app.component';
import { User } from '../model/user';
import { Service } from '../policy-service/service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IsError: boolean;
  private token: string;
  tokeni: any;


  message: string;
  constructor(private service: Service, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.token = String(this.service.authenticate(user));
    // if (this.token !== null) {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.message = 'Enter Valid Credentials';
    // }
  }


//   onSubmit(user: User) {
//     console.log('in');
//     this.service.authenticate(user).subscribe(data => {
//       // this.router.navigate(['/home']);
//       // this.appComponent.token = data;
//       // console.log(data);
//       // this.token = String(data);
//       // console.log(this.token);
//       this.message = String(data);

//     // tslint:disable-next-line:no-shadowed-variable
//     }, (error) => {
//       // this.IsError=true;
//       this.message = 'Enter Valid Credentials';
//       // if (error.username === 'admin' && error.password === 'admin') {
//       //   this.router.navigate(['/home']);
//       // }
//       // console.log('invalid input');
//     });
//   }

}
