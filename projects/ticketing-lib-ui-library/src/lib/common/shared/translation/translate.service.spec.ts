import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { TranslateService } from './translate.service';
import {
  TranslocoTestingModule
} from '@ngneat/transloco';

describe('TranslateService', () => {
  let spectator: SpectatorService<TranslateService>;

  const createService = createServiceFactory({
    service: TranslateService,
    imports: [TranslocoTestingModule]
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should init', () => {
    expect(spectator.service).toBeTruthy();
  });
});
