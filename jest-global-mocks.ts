import { jest } from '@jest/globals';

Object.defineProperty(window, 'CSS', { value: null });

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

HTMLCanvasElement.prototype.getContext = jest.fn() as typeof HTMLCanvasElement.prototype.getContext;

const getStorage = () => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => {
      return store[key];
    },
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
};
Object.defineProperty(window, 'localStorage', { value: getStorage() });
Object.defineProperty(window, 'sessionStorage', { value: getStorage() });

Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', { value: () => {} });
Object.defineProperty(window.HTMLDivElement.prototype, 'offsetTop', { get: () => 200 });
Object.defineProperty(window.HTMLTableSectionElement.prototype, 'offsetTop', { get: () => 200 });
