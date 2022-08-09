import { Inject, Injectable, Optional } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoService } from '@ngneat/transloco';
import type { ProviderScope } from '@ngneat/transloco';
import { Observable, of, pipe, UnaryFunction } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';
import { JsonTranslateKey } from './translation-json.export';

export enum Locale {
  FR = 'fr',
  EN = 'en',
  ES = 'es'
}

export enum formatDateByLocale {
  fr = 'dd/MM/yyyy HH:mm',
  en = 'MM/dd/yyyy h:mm a',
  es = 'dd/MM/yyyy HH:mm'
}

@Injectable({
  providedIn: 'any'
})
export class TranslateService {
  get langChanges$() {
    return this.translocoService.langChanges$;
  }

  constructor(
    private translocoService: TranslocoService,
    @Optional() @Inject(TRANSLOCO_SCOPE) private readonly scope: ProviderScope
  ) {
    if (this.scope === null) {
      this.scope = { scope: 'shared' };
    }
  }

  translate(key: string, params = {}, scope: string | ProviderScope = this.scope): string {
    const scopeString = typeof scope === 'object' ? scope.scope : scope;
    return this.translocoService.translate(key, params, scopeString);
  }

  translateWithDefault(key: string, defaultValue: string, params = {}, scope: string | ProviderScope = this.scope): string {
    const scopeString = typeof scope === 'object' ? scope.scope : scope;
    if (
      Object.keys(this.translocoService.getTranslation(this.translocoService.getActiveLang())).includes(`${scopeString}.${key}`)
    ) {
      return this.translocoService.translate(key, params, scopeString);
    } else {
      return defaultValue;
    }
  }

  loadTranslations(scope: string, translateKeys: JsonTranslateKey) {
    Object.entries(translateKeys).forEach(([key, value]) => {
      this.translocoService.setTranslation(
        {
          [scope]: value
        },
        key
      );
    });
  }

  asyncTranslate(key: string, params = {}, scope: string | ProviderScope = this.scope): Observable<string> {
    return this.translocoService.selectTranslate(key, params, scope);
  }

  withTranslation<T>(): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe(switchMap((value: T) => this.translocoService.langChanges$.pipe(switchMapTo(of(value)))));
  }

  setActiveLang(newLangEvent: string) {
    this.translocoService.setActiveLang(newLangEvent);
  }

  getActiveLang(): string {
    return this.translocoService.getActiveLang();
  }

  getFormatDate(): string {
    return formatDateByLocale[this.translocoService.getActiveLang()];
  }

  getScope() {
    return this.scope;
  }
}
