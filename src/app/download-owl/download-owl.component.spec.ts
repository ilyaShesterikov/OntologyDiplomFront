import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DownloadOwlComponentComponent} from './download-owl.component';


describe('DownloadOwlComponentComponent', () => {
  let component: DownloadOwlComponentComponent;
  let fixture: ComponentFixture<DownloadOwlComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadOwlComponentComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadOwlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
