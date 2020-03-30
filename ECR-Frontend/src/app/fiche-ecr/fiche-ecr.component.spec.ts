import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEcrComponent } from './fiche-ecr.component';

describe('FicheEcrComponent', () => {
  let component: FicheEcrComponent;
  let fixture: ComponentFixture<FicheEcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheEcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheEcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
