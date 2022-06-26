import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  option: number;
  constructor() { 
   this.option = 0;
  }

  ngOnInit(): void {
  }
  changeComponent1(){
    this.option = 1;
  }
  changeComponent2(){
    this.option = 2;
  }
  changeComponent3(){
    this.option = 3;
  }

}
