import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  getAllPokeObj(): Observable<AllPokeObj> {
    return this.http.get<AllPokeObj>(this.baseUrl );
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

export interface PokeObj{
  name: string 
  id: number
  stats: [
    { 
      base_stat: number
      stat: {
        name: string
      }
    }
  ]
  sprite: [
    {
      front_default: string
      other: {
        dream_world: {
          front_default: string
        }
      }
    }
  ]


}




