import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsFormComponent } from './stars-form.component';

describe('StarsFormComponent', () => {
  let component: StarsFormComponent;
  let fixture: ComponentFixture<StarsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarsFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
