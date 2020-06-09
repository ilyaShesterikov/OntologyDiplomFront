import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SelectIndividualsComponentComponent} from './select-individuals.component';


describe('SelectIndividualsComponentComponent', () => {
  let component: SelectIndividualsComponentComponent;
  let fixture: ComponentFixture<SelectIndividualsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIndividualsComponentComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIndividualsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
