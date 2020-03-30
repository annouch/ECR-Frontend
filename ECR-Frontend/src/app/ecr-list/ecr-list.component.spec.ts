import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrListComponent } from './ecr-list.component';

describe('EcrListComponent', () => {
  let component: EcrListComponent;
  let fixture: ComponentFixture<EcrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
