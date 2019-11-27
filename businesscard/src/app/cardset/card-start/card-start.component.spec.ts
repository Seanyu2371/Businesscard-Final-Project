import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStartComponent } from './card-start.component';

describe('CardStartComponent', () => {
  let component: CardStartComponent;
  let fixture: ComponentFixture<CardStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
