import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TeamCardService {
  // private readonly pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon'
  private readonly baseUrl = 'http://localhost:8080/api/trainer/';

  constructor(private http: HttpClient) { }


  getTrainersPokemonList(username: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseUrl}${username}/poke/list`)
    
  }
  getPokemonOutOfTrainersList(username: string, pokename: String): Observable<Trainer> {
    return this.http.delete<Trainer>(`${this.baseUrl}${username}/poke/remove/${pokename}`)
    
  }
}


// export interface AllPokeObj{
//   next: string
//   previous: string | undefined
//   results: [{
//     name: string
//     url: string
//   }]
// }

//height
//wheight
//base expirience
//items
// export interface PokeObj{
//   name: string 
//   base_experience: number
//   id: number
//   held_items: []//como hago para saber cuantos trae?
//   height: number
//   stats: [
//     { base_stat: number }, 
//     { base_stat: number }, 
//     { base_stat: number }, 
//     { base_stat: number }, 
//     { base_stat: number }, 
//     { base_stat: number }    
//   ]
//   sprites: {
//     front_default: string
//     other: {
//       dream_world: {
//         front_default: string
//       }
//     }
//   }
//   weight: number

