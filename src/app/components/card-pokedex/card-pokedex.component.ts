import { Component, Input, OnInit } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex';

@Component({
  selector: 'app-card-pokedex',
  templateUrl: './card-pokedex.component.html',
  styleUrls: ['./card-pokedex.component.css']
})
export class CardPokedexComponent implements OnInit {

  @Input() 
  pokedex: Pokedex;

  
  @Input()
  index: number;

  // @Output() 

  // employeeDeleted = new EventEmitter<number>();

  isShown : boolean

  constructor() { 
    this.pokedex = new Pokedex(0, '', '',0, 0, 0, 0, 0, 0);
    this.index = 0;
    this.isShown = false; 
  
  }

  ngOnInit(): void {

  }

  showDetails(){
    this.isShown = !this.isShown; 
  }

}
