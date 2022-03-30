import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  departmentStatus:any;
  public gridData: any = [];
  resp:any;
  ress: any=[];
  uniquId: any;
  constructor( private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {

  }
  
  logOut(){
    localStorage.setItem("email",'');
    this.router.navigate(['login'])
  }

  
}
