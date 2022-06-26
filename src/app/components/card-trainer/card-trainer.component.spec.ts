import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrainerComponent } from './card-trainer.component';

describe('CardTrainerComponent', () => {
  let component: CardTrainerComponent;
  let fixture: ComponentFixture<CardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
