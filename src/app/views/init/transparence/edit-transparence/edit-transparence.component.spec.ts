import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransparenceComponent } from './edit-transparence.component';

describe('EditTransparenceComponent', () => {
  let component: EditTransparenceComponent;
  let fixture: ComponentFixture<EditTransparenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransparenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransparenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
