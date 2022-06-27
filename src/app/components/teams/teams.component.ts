import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
@Input()
trainersList: Trainer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
