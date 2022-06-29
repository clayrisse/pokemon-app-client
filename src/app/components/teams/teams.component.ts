import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { TeamsService } from 'src/app/services/teams.service';
import { Trainer } from 'src/app/models/trainer';
import { Subject } from 'rxjs';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  searchName: string    //html variable
  trainerName: string;  //html variable

  pokeNameList: string[];
  trainerList: Trainer[];
  
  refreshListen: Subject<void> = new Subject()
  
  constructor(private teamsService: TeamsService) { 
    this.searchName = '';
    this.pokeNameList = [];
    this.trainerList = [];
    this.trainerName = '';
  }

  ngOnInit(): void {
    this.getPokeNameBigList();
    this.getTrainers();
  }

  getTrainers() {
    this.teamsService.getTrainerList().subscribe(
      response => {
        for (const trainer of response) {
          this.trainerList.push(trainer);
        }
    })
  }

  getPokeNameBigList() {
    this.teamsService.getAllPokeObj().subscribe(
      response => {
      for (const poke of response.results) {
         this.pokeNameList.push(poke.name);
      }
    })
  }
  
  searchAddPoke(username: string, searchName: string) {
    console.log('searchName', searchName)
    this.teamsService.getPokeObj(searchName).subscribe(
      response => {
        console.log('respons----------------e', response )
        response.held_items.length
      const pokeDto = {
          id: response.id, 
          name: response.name,
          weight: response.weight,
          height: response.height, 
          // items: 1, 
          items: response.held_items.length, 
          experience: response.base_experience,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defence: response.stats[2].base_stat,
          spAttack: response.stats[3].base_stat,
          spDefence: response.stats[4].base_stat,
          speed: response.stats[5].base_stat,
          image: response.sprites.other.dream_world.front_default
    
        }
        this.searchName = '';
        this.addPokeToTrainer(username, pokeDto);
      })
  }

  addPokeToTrainer(username: string, pokeDto: Object) {
    console.log('entreeeeeee')
    this.teamsService.postPokeToTraiter(username, pokeDto).subscribe(
      response => {
        this.refreshListen.next()
      })
  }

}
