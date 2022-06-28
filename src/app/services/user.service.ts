import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  
}
export interface User {
  
  "username": string,
  "birth": string,
  "picture": string,
  "hobby": string

}