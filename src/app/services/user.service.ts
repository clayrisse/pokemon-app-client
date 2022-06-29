import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  addTrainer(trainer: Trainer)  {
    const data= {
      username: trainer.username,
      birth: trainer.birth,
      picture: trainer.picture,
      hobby: trainer.hobby
    }; 

  return this.http.post(this.baseUrl + "api/trainer/add/", data);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "api/trainer/all");
  }
  removeTrainerService(username: string) : Observable<void>{
    return this.http.delete<void>(this.baseUrl + "api/trainer/delete_by_username/" + username)
  }

  getUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(this.baseUrl + "api/trainer/name/" + username)
  }
  getTrainersPokemonList(username: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl + "api/trainer/" + username + "/poke/list")
    
  }
}

export interface User {
  
  "username": string,
  "birth": Date,
  "picture": string,
  "hobby": string

}