import { TranslocoService } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { Locale } from './translate.service';

export const initTranslations = (scope: string, http: HttpClient, translocoService: TranslocoService) => () =>
  new Promise<void>(async resolve => {
    for (const lang of Object.values(Locale)) {
      translocoService.setTranslation(
        {
          [scope]: await http.get(`assets/i18n/${scope}/${lang}.json`).toPromise()
        },
        lang
      );
    }
    resolve();
  });
