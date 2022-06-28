import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon'
  private readonly girlsBaseUrl = 'http://localhost:8080/api/trainer/';

  constructor(private http: HttpClient) { }

  getAllPokeObj(): Observable<AllPokeObj> {
    return this.http.get<AllPokeObj>(this.pokeApiUrl + "?limit=100000&offset=0");
  }

  getPokeObj(pokename:string): Observable<PokeObj>{
    return this.http.get<PokeObj>(this.pokeApiUrl + "/" + pokename);
  }

  postPokeToTraiter(username: string, pokeDto: Object): Observable<Trainer>{
    console.log('entreeee--------2')
    return this.http.post<Trainer>(`${this.girlsBaseUrl}${username}/poke/add`, pokeDto)
  }

  getTrainerList(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.girlsBaseUrl + "all")
  }
}


export interface AllPokeObj{
  next: string
  previous: string | undefined
  results: [{
    name: string
    url: string
  }]
}

//height
//wheight
//base expirience
//items
export interface PokeObj{
  name: string 
  base_experience: number
  id: number
  held_items: []//como hago para saber cuantos trae?
  height: number
  stats: [
    { base_stat: number }, 
    { base_stat: number }, 
    { base_stat: number }, 
    { base_stat: number }, 
    { base_stat: number }, 
    { base_stat: number }    
  ]
  sprites: {
    front_default: string
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  weight: number

}








