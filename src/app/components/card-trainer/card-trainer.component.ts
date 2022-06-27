import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';

@Component({
  selector: 'app-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.css']
})
export class CardTrainerComponent implements OnInit {

  @Input() 
  trainer: Trainer;
  @Input()
  index: number;
  @Output()
  trainerDeletedEvento = new EventEmitter<number>();

  constructor() { 
    this.trainer = new Trainer("", "", "", "");
    this.index = 0;
  }

  ngOnInit(): void {
  }
  
  deleteHijo() {
    this.trainerDeletedEvento.emit(this.index);
  }

}
