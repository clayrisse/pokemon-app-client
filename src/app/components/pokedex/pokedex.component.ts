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

  name: string;
  hp: number;
  attack: number;
  defence: number; 
  spAttack: number;
  spDefence: number;
  speed: number;
  
  pokeList1:[];
  pokeObjList: [];


  constructor(private pokedexService: PokedexService) { 
    
    this.name = '';
    this.hp = 0;
    this.attack = 0;
    this.defence = 0;
    this.spAttack = 0;
    this.spDefence = 0;
    this.speed = 0; 

    this.pokeList1 = [];
    this.pokeObjList = [];
    
  }

  ngOnInit(): void {
    this.addPokedex();

  }

  addPokedex() {
    this.pokedexService.getAllPokeObj().subscribe(
      response => {

    console.log("response", response);
    
    for (const poke of response.results) {
      console.log('typeof poke :>> ', typeof poke);
      console.log('poke :>> ', poke);
     // this.pokeList1.push(poke.name);
    }
  })
}


// this.pokedexService.getPokeObj(poke.name).subscribe(
//   response => {
//     console.log('response :>> ', response);
//     // this.pokeObjList.push(response)
//   })
// }
}


//   const id: number = poke.id;
    //   const name: string = poke.name;
    //   const hp :number = poke.hp;
    //   const attack: number = poke.attack;
    //   const defence: number= poke.defence;
    //   const spAttack: number = poke.spAttack;
    //   const spDefence: number= poke.spDefence;
    //   const speed : number = poke.speed;
      
    //   const pokedex: Pokedex = new Pokedex(id, name, hp, attack, defence, spAttack, spDefence, speed);
     
    //     this.pokeObj.push(po
      
    // }