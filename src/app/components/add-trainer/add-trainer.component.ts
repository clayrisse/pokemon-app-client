import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  username: string;
  birth: Date;
  picture: string;
  hobby: string;

  constructor(private userService: UserService) { 
  this.username = "";
  this.birth = new Date();
  this.picture = "";
  this.hobby = "";
  }

  ngOnInit(): void {
   
  }

  addTrainers() {
    let trainer: Trainer = new Trainer(this.username, this.birth, this.picture, this.hobby);
    this.userService.addTrainer(trainer).subscribe();
  }

  /*deleteTrainerPadre(index: number) {
    let trainer : Trainer = this.trainersList.splice(index, 1)[0];
      this.userService.removeTrainerService(trainer.id).subscribe();
}*/

 

}
