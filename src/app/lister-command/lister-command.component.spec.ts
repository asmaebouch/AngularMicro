import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCommandComponent } from './lister-command.component';

describe('ListerCommandComponent', () => {
  let component: ListerCommandComponent;
  let fixture: ComponentFixture<ListerCommandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerCommandComponent]
    });
    fixture = TestBed.createComponent(ListerCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
