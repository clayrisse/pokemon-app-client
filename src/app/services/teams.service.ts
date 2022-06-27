import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  getAllPokeObj(): Observable<AllPokeObj> {
    return this.http.get<AllPokeObj>(this.baseUrl + "?limit=100000&offset=0");
  }

  getPokeObj(pokename:string): Observable<PokeObj>{
    return this.http.get<PokeObj>(this.baseUrl + "/" + pokename);
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








