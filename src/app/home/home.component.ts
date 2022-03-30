import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leng:any=[];
  loginuser:any;
  constructor() { }

  ngOnInit(): void {
    this.loginuser=localStorage.getItem('email');
    this.leng=[
      {
        "title":"Nature",
        "image":"/assets/demo.jpg",
        "description":"Nature, in the broadest sense, is the physical world or universe.Nature can refer to the phenomena of the physical world, and also to life in general.",
      },
      {
        "title":"Nature",
        "image":"/assets/demo.jpg",
        "description":"Nature, in the broadest sense, is the physical world or universe.Nature can refer to the phenomena of the physical world, and also to life in general.",
      },
      {
        "title":"Nature",
        "image":"/assets/demo.jpg",
        "description":"Nature, in the broadest sense, is the physical world or universe.Nature can refer to the phenomena of the physical world, and also to life in general.",
      },
      {
        "title":"Nature",
        "image":"/assets/demo.jpg",
        "description":"Nature, in the broadest sense, is the physical world or universe.Nature can refer to the phenomena of the physical world, and also to life in general.",
      }
    ]
  }

  showchange(){
    for(var i=0;i<4;i++){
      this.leng.push({
        "title":"Nature",
        "image":"/assets/demo.jpg",
        "description":"Nature, in the broadest sense, is the physical world or universe.Nature can refer to the phenomena of the physical world, and also to life in general.",
      })
    }
  }

}
