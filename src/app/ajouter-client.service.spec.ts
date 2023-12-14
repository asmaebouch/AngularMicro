import { TestBed } from '@angular/core/testing';

import { AjouterClientService } from './ajouter-client.service';

describe('AjouterClientService', () => {
  let service: AjouterClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
