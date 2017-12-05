import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlWelcomeComponent } from './sl-welcome.component';

describe('SlWelcomeComponent', () => {
  let component: SlWelcomeComponent;
  let fixture: ComponentFixture<SlWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
