import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { TeamCardService } from 'src/app/services/team-card.service';
import { Trainer } from 'src/app/models/trainer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  
  @Input()
  trainer: Trainer;
  
  @Input()
  jose: Observable<void> = new Observable()

  

  pokemonList: Pokemon[];
  isBtnOn: boolean;
  // jose: EventListener;
  
  constructor(private teamCardService: TeamCardService) {

    this.pokemonList = [];
    this.trainer = new Trainer ('', '01/01/1111', '', '');
    this.isBtnOn = false
    
  }

  ngOnInit(): void {
    this.jose.subscribe((res)=>{
      this.showPokemons(this.trainer.username)
      console.log("sejecutoh..............")
    })
    // this.showPokemons(); 
  }

  getPokemons(username: string) {
    this.pokemonList = []
    this.teamCardService.getTrainersPokemonList(username).subscribe(
      response => {
        console.log('mis lista de pokes', response)
        for (const poke of response)  this.pokemonList.push(poke)
    })
  }

  showPokemons(username: string){
    console.log("11111111", this.isBtnOn)

    this.isBtnOn = !this.isBtnOn;
    if(this.isBtnOn) {
      this.getPokemons(username)
    } else {
      this.pokemonList = [];
    }
    console.log("22222222", this.isBtnOn);
  }

  removePoke(username: string, pokename: string) {
    console.log('borrando poke')
    this.teamCardService.getPokemonOutOfTrainersList(username, pokename).subscribe(
      response => {
        // console.log('borrando poke', response)
        this.isBtnOn = false;
        this.showPokemons(username)
    })
    // this.pokemonList = []

  }


}
