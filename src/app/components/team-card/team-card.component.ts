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
  refresher: Observable<void> = new Observable()

  pokemonList: Pokemon[];
  isBtnOn: boolean;
  
  constructor(private teamCardService: TeamCardService) {

    this.pokemonList = [];
    this.trainer = new Trainer ('', new Date, '', '');
    // this.isBtnOn = false
    this.isBtnOn = true
    
  }

  ngOnInit(): void {

    this.refresher.subscribe((res)=>{
      this.getPokemons(this.trainer.username)
      console.log("sejecutoh..............", this.isBtnOn)
    })
    // this.showPokemons(); 
  }

  getPokemons(username: string) {
    this.pokemonList = []
    this.teamCardService.getTrainersPokemonList(username).subscribe(
      response => {
        for (const poke of response)  this.pokemonList.push(poke)
        console.log('this.pokemonList', this.pokemonList)
    })
  }

  showPokemons(username: string){
    this.isBtnOn = !this.isBtnOn;
    if(this.isBtnOn) {
      this.getPokemons(username)
    } else {
      this.pokemonList = [];
    }
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
