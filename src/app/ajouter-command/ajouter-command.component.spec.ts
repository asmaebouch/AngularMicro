import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCommandComponent } from './ajouter-command.component';

describe('AjouterCommandComponent', () => {
  let component: AjouterCommandComponent;
  let fixture: ComponentFixture<AjouterCommandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCommandComponent]
    });
    fixture = TestBed.createComponent(AjouterCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
