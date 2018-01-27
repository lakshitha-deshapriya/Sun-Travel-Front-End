import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContractComponent } from './show-contract.component';

describe('ShowContractComponent', () => {
  let component: ShowContractComponent;
  let fixture: ComponentFixture<ShowContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
