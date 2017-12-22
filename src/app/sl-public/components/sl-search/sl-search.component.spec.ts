import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlSearchComponent } from './sl-search.component';

describe('SlSearchComponent', () => {
  let component: SlSearchComponent;
  let fixture: ComponentFixture<SlSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
