import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }

  addTrainer(trainer: Trainer)  {
    const data= {
      username: trainer.username,
      birth: trainer.birth,
      picture: trainer.picture,
      hobby: trainer.hobby
    }; 

  return this.http.post(this.baseUrl + "add/", data);
  }
  /*removeTrainerService(id: number) : Observable<void>{
    return this.http.delete<void>(this.baseUrl + "delete/" + id)
    
  }*/
  
}
export interface User {
  
  "id": number,
  "username": string,
  "birth": Date,
  "picture": string,
  "hobby": string

}