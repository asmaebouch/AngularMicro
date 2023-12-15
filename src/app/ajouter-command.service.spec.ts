import { TestBed } from '@angular/core/testing';

import { AjouterCommandService } from './ajouter-command.service';

describe('AjouterCommandService', () => {
  let service: AjouterCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
