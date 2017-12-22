import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlImportComponent } from './sl-import.component';

describe('SlInfoComponent', () => {
  let component: SlImportComponent;
  let fixture: ComponentFixture<SlImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
