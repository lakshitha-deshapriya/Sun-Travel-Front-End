/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomTypeService } from './room-type.service';

describe('RoomTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomTypeService]
    });
  });

  it('should ...', inject([RoomTypeService], (service: RoomTypeService) => {
    expect(service).toBeTruthy();
  }));
});
