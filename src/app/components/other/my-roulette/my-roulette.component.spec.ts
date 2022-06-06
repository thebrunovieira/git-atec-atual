import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouletteComponent } from './my-roulette.component';

describe('MyRouletteComponent', () => {
  let component: MyRouletteComponent;
  let fixture: ComponentFixture<MyRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
