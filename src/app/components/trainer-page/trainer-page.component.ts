import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from 'src/app/models/trainer';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  trainer: Trainer;
  usernameId! : string;

  constructor(private userService: UserService, private route: ActivatedRoute) { 

    this.trainer= new Trainer('','','','');
    this.usernameId = this.route.snapshot.params["username"]
  }

  ngOnInit(): void {
  
    this.userService.getUserByUsername(this.usernameId).subscribe(
      response =>{
        console.log('response', response)
        const {username, birth, picture, hobby } = response
  
        this.trainer = new Trainer(username, birth, picture, hobby);
      
      });
  }

}