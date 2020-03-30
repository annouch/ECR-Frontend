import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrDetailsComponent } from './ecr-details.component';

describe('EcrDetailsComponent', () => {
  let component: EcrDetailsComponent;
  let fixture: ComponentFixture<EcrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
