import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsItemComponent } from './create-news-item.component';

describe('CreateNewsItemComponent', () => {
  let component: CreateNewsItemComponent;
  let fixture: ComponentFixture<CreateNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
