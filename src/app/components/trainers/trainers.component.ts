import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  option: boolean;
  trainersList: Trainer[] | undefined;
 
  constructor() {
    this.option = false;
   }

   ngOnInit(): void {
    this.trainersList = [
      new Trainer("Juan", new Date(), "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gstatic.com%2Fimages%2Fbranding%2Fproduct%2F1x%2Fgoogleg_lodged_dark.png&imgrefurl=https%3A%2F%2Fwww.google.com%2F&tbnid=_Xj-5JZqx-zQVM&vet=12ahUKEwjIw6Hq8LXrAhXDxZQKHX_oD_8QMygBegUIARDsQ..iact&docid=_Xj-5JZqx-zQVM&w=400&h=400&q=google%20logo&ved=0ahUKEwjIw6Hq8LXrAhXDxZQKHX_oD_8QMygBegUIARDsQ", "Hola soy Juan"),
      new Trainer("Pedro", new Date(), "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gstatic.com%2Fimages%2Fbranding%2Fproduct%2F1x%2Fgoogleg_lodged_dark.png&imgrefurl=https%3A%2F%2Fwww.google.com%2F&tbnid=_Xj-5JZqx-zQVM&vet=12ahUKEwjIw6Hq8LXrAhXDxZQKHX_oD_8QMygBegUIARDsQ..iact&docid=_Xj-5JZqx-zQVM&w=400&h=400&q=google%20logo&ved=0ahUKEwjIw6Hq8LXrAhXDxZQKHX_oD_8QMygBegUIARDsQ", "Hola soy Pedro"),

  ]}
  


  //methods nifor add trainer card
  addTrainerCardShow(){
   return (this.option = true);
  }
  showData() {
    
  }
  addTrainerCardHide() {
    return (this.option = false);
  }
  


}
