import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparenceComponent } from './transparence.component';

describe('TransparenceComponent', () => {
  let component: TransparenceComponent;
  let fixture: ComponentFixture<TransparenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
