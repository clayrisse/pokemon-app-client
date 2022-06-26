import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokedex } from 'src/app/models/pokedex';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})

export class PokedexComponent implements OnInit {

  pokeObjList: Pokedex[];


  constructor(private pokedexService: PokedexService) { 
    this.pokeObjList = [];
  }

  ngOnInit(): void {
    this.getPokeNameList();
  }

  getPokeNameList() {
    this.pokedexService.getAllPokeObj().subscribe(
      response => {
      for (const poke of response.results) {
         this.getPokeObj(poke.name);
      }
    })
  }
  
  getPokeObj(name: string) {
    this.pokedexService.getPokeObj(name).subscribe(
      response => {
      const id = response.id;
      const name = response.name;
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

  
}