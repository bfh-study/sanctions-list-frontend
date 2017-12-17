import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlRestServiceComponent } from './sl-rest-service.component';

describe('SlRestServiceComponent', () => {
  let component: SlRestServiceComponent;
  let fixture: ComponentFixture<SlRestServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlRestServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlRestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
