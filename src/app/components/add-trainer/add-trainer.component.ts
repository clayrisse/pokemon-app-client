import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  username: string;
  birth: string;
  picture: string;
  hobby: string;
  @Output()
  addTrainerEvento = new EventEmitter<Trainer>();

  constructor(private userService: UserService) { 
  this.username = "";
  this.birth = "";
  this.picture = "";
  this.hobby = "";
  }

  ngOnInit(): void {
   
  }

  addTrainers() {
   this.addTrainerEvento.emit(new Trainer(this.username, this.birth, this.picture, this.hobby));
  }
    
  

 


}
