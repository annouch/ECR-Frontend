import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrUpdateComponent } from './ecr-update.component';

describe('EcrUpdateComponent', () => {
  let component: EcrUpdateComponent;
  let fixture: ComponentFixture<EcrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
