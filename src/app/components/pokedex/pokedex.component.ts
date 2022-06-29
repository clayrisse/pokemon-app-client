import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokedex } from 'src/app/models/pokedex';
import { PokedexService } from 'src/app/services/pokedex.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Trainer } from 'src/app/models/trainer';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})

export class PokedexComponent implements OnInit {
  searchName: string; 
  pokeObjList: Pokedex[];
  currentUrl: string;
  next: string;
  previous: string;
  pokeNameList: string[];
  

  constructor(private pokedexService: PokedexService) { 
    this.searchName = '';
    this.pokeObjList = [];
    this.currentUrl = 'https://pokeapi.co/api/v2/pokemon';

    this.next = '' 
    this.previous = '' 
    this.pokeNameList = [];
  }

  ngOnInit(): void {
    this.getPokeNameList(this.currentUrl);
    this.getPokeNameBigList(); 
  }

  getPokeNameBigList() {
    this.pokedexService.getAllBigPokeObj().subscribe(
      response => {
      for (const poke of response.results) {
         this.pokeNameList.push(poke.name);
    
      }
    })
  }
  getPokeNameList(url: string) {
    this.pokeObjList = []
    this.pokedexService.getAllPokeObj(url).subscribe(
      response => {
      this.next=response.next
      this.previous=response.previous
      for (const poke of response.results) {
      // var pokename = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
         this.getPokeObj(poke.name);
      }
    })
  }
  
  getPokeObj(name: string) {
    this.pokedexService.getPokeObj(name).subscribe(
      response => {
      const { id, name } = response;
      const hp  = response.stats[0].base_stat;
      const attack = response.stats[1].base_stat;
      const defence= response.stats[2].base_stat;
      const spAttack = response.stats[3].base_stat;
      const spDefence= response.stats[4].base_stat;
      const speed  = response.stats[5].base_stat;
      const image  = response.sprites.other.dream_world.front_default;
      const pokedex = new Pokedex( id, name, image, hp, attack, defence, spAttack, spDefence, speed)
      this.pokeObjList.push(pokedex)
    })
  }

  getNext() {
    this.pokeObjList = []
    this.getPokeNameList(this.next);
  }
  
  getPrevious() {
    this.pokeObjList = []
    this.getPokeNameList(this.previous);
  }

  searchAddPoke(searchName: string) {
    this.pokeObjList = []
    console.log('searchName', searchName)
    this.pokedexService.getPokeObj(searchName).subscribe(
      response => {
       
        const { id, name } = response;
        const hp  = response.stats[0].base_stat;
        const attack = response.stats[1].base_stat;
        const defence= response.stats[2].base_stat;
        const spAttack = response.stats[3].base_stat;
        const spDefence= response.stats[4].base_stat;
        const speed  = response.stats[5].base_stat;
        const image  = response.sprites.other.dream_world.front_default;
        const pokedex = new Pokedex( id, name, image, hp, attack, defence, spAttack, spDefence, speed)
      this.getPokeObj(searchName)
      })
  }

  
}
