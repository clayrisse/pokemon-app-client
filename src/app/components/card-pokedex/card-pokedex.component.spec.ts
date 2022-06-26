import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokedexComponent } from './card-pokedex.component';

describe('CardPokedexComponent', () => {
  let component: CardPokedexComponent;
  let fixture: ComponentFixture<CardPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
