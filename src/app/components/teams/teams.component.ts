import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { TeamsService } from 'src/app/services/teams.service';
import { Trainer } from 'src/app/models/trainer';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  //-----------------rociooooo

  @Input()
  trainersList: Trainer[] = [];

  //----------------clauuuuuuuu

  searchName: string
  pokeNameList: string[];
  pokeObj: Pokemon;
  trainerList: Trainer[];
  


  constructor(private teamsService: TeamsService) { 

    this.searchName = '';
    this.pokeNameList = [];
    this.pokeObj = new Pokemon(0,'','',0,0,0,0,0,0,0,0,0,0);
    this.trainerList = [];

   
  }

  ngOnInit(): void {
    this.getPokeNameBigList();
    this.getTrainers();
  }

  getTrainers() {
    this.teamsService.getTrainerList().subscribe(
      response => {
        console.log('response trainerss', response)
        for (const trainer of response) {

          this.trainerList.push(trainer);
       }
      }
    )
  }

  getPokeNameBigList() {
    this.teamsService.getAllPokeObj().subscribe(
      response => {
      for (const poke of response.results) {
         this.pokeNameList.push(poke.name);
      }
    })
  }
  
  searchPoke(searchName: string) {
    console.log('searchName', searchName)
    this.teamsService.getPokeObj(searchName).subscribe(
      response => {
        console.log('response-----', response)
        const { id, name, weight, height, held_items } = response;
  
        const experience  = response.base_experience;
        const hp  = response.stats[0].base_stat;
        const attack = response.stats[1].base_stat;
        const defence= response.stats[2].base_stat;
        const spAttack = response.stats[3].base_stat;
        const spDefence= response.stats[4].base_stat;
        const speed  = response.stats[5].base_stat;
        const image  = response.sprites.other.dream_world.front_default;
      
      this.pokeObj = new Pokemon( id, name, image, hp, attack, defence, spAttack, 
        spDefence, speed, experience, weight, height, held_items.length)
        console.log('poke---Obj', this.pokeObj)
        console.log('poke******', this.pokeObj)
      
      const pokeDto = {
          id: response.id, 
          name: response.name,
          weight: response.weight,
          height: response.height, 
          items: 1, 
          // items: response.held_items.length, 
          experience: response.base_experience,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defence: response.stats[2].base_stat,
          spAttack: response.stats[3].base_stat,
          spDefence: response.stats[4].base_stat,
          speed: response.stats[5].base_stat,
          image: response.sprites.other.dream_world.front_default
        }
        this.addPokeToTrainer("test", pokeDto);
      })
  }

  addPokeToTrainer(username: string, pokeDto: Object) {
    console.log('entreeeeeee')
    this.teamsService.postPokeToTraiter(username, pokeDto).subscribe(
      response => {
        console.log('taaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      })
  }

}
