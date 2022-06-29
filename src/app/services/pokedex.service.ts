import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon'
  private readonly girlsBaseUrl = 'http://localhost:8080/api/trainer/'


  constructor(private http: HttpClient) { }

  getAllBigPokeObj(): Observable<AllPokeObj> {
    return this.http.get<AllPokeObj>(this.pokeApiUrl + "?limit=10000&offset=0");
  }


  getAllPokeObj(url: string): Observable<AllPokeObj> {
    return this.http.get<AllPokeObj>(url);
  }

  getPokeObj(pokename:string): Observable<PokeObj>{
    return this.http.get<PokeObj>(this.baseUrl + "/" + pokename);
  }

  getNextPokeObj(route: string) {
    return this.http.get<AllPokeObj>(route);
  }

  getPreviousPokeObj(route: string) {
    return this.http.get<AllPokeObj>(route);
  }
}


export interface AllPokeObj{
  next: string
  previous: string
  results: [{
    name: string
    url: string
  }]
}

export interface PokeObj{
  name: string 
  id: number
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
}




