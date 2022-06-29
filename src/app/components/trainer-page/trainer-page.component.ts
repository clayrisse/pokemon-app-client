import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css'],
  host: {'class': 'card'}
})
export class TrainerPageComponent implements OnInit {

  trainer: Trainer;
  usernameId! : string;
  pokemonList: Pokemon [] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { 

    this.trainer= new Trainer('', new Date,'','');
    this.usernameId = this.route.snapshot.params["username"]
  }

  ngOnInit(): void {
  
    this.userService.getUserByUsername(this.usernameId).subscribe(
      response =>{
      
        const {username, birth, picture, hobby } = response
        this.trainer = new Trainer(username, new Date(birth), picture, hobby);
      
      });
      this.getPokemons(this.usernameId);

      
  }
  getPokemons(username: string) {
    this.pokemonList = []
    this.userService.getTrainersPokemonList(username).subscribe(
     
      response => { 
        console.log(response)
        for (const poke of response)  this.pokemonList.push(poke)
    })
  }
}