import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { UserService } from 'src/app/services/user.service';

import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  option: boolean;
  trainersList: Trainer[] = [];
 
 
  constructor(private userService: UserService) {
    this.option = false;
   }

   ngOnInit(): void {
 this.trainersList = [];
  this.userService.getUsers().subscribe(
    response =>{
      response.forEach((user) => {
      const username: string = user.username;
      const birth: string = user.birth;
      const picture: string = user.picture;
      const hobby: string = user.hobby;

      const trainer: Trainer = new Trainer(username, birth, picture, hobby);
     this.trainersList.push(trainer)
    });
  });

}
   deleteTrainerPadre(index: number) {
    let trainer : Trainer = this.trainersList.splice(index, 1)[0];
      this.userService.removeTrainerService(trainer.username).subscribe((response) =>
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your trainer has been removed',
        showConfirmButton: false,
        timer: 1500,
        color: '#0016b0',
        iconColor: '#0016b0',
        background: '#FFCB05'
        
      }));
    }

    addTrainers(trainer: Trainer) {
      this.trainersList.forEach(element => {
        if(element.username == trainer.username){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your trainer already exists',
            showConfirmButton: false,
            timer: 1500,
            color: '#0016b0',
            iconColor: '#0016b0',
            background: '#FFCB05'
            
          });}
          
        }); 
    this.userService.addTrainer(trainer).subscribe((response) => 
      {this.ngOnInit();});
  
          Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your trainer has been saved',
        showConfirmButton: false,
        timer: 1500,
        color: '#0016b0',
        iconColor: '#0016b0',
        background: '#FFCB05'
      });
      
    }


  //methods nif add trainer card
  addTrainerCardShow(){
   return (this.option = true);
  }
  showData() {
    
  }
  addTrainerCardHide() {
    return (this.option = false);
  }
  


}
