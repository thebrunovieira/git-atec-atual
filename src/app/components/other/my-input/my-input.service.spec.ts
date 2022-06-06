import { TestBed } from '@angular/core/testing';

import { MyInputService } from './my-input.service';

describe('MyInputService', () => {
  let service: MyInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
