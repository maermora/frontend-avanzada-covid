import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexpieComponent } from './sexpie.component';

describe('SexpieComponent', () => {
  let component: SexpieComponent;
  let fixture: ComponentFixture<SexpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
