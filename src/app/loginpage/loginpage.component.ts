import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  title: any;
  msg: any;
  showClose = true;
  isSubmitted = false;
  loginfrm:any= FormGroup;
  r:any=[];
  constructor(private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.loginfrm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
 
  get f() { return this.loginfrm.controls; }
  onSubmit(){
    this.isSubmitted = true;
    
    if (this.loginfrm.invalid) {
      return;
    }
    else
    {
      localStorage.setItem('email', this.loginfrm.value.email);
      this.router.navigate(['dashboard'])
    }
  }
}
