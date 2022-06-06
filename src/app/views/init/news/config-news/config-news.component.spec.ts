import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNewsComponent } from './config-news.component';

describe('ConfigNewsComponent', () => {
  let component: ConfigNewsComponent;
  let fixture: ComponentFixture<ConfigNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
