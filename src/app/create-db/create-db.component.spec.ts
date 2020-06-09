import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CreateDBComponentComponent} from './create-db.component';


describe('CreateDBComponentComponent', () => {
  let component: CreateDBComponentComponent;
  let fixture: ComponentFixture<CreateDBComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDBComponentComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
