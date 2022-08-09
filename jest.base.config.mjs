import { pathsToModuleNameMapper } from 'ts-jest';
import { default as tsconfig } from './tsconfig.json' assert { type: 'json' };
import ngPreset from 'jest-preset-angular/presets/index.js';

globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: 'tsconfig.spec.json'
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export const baseConfig = {
  verbose: true,
  ...ngPreset.defaultsESM,
  globals: {
    'ts-jest': {
      ...ngPreset.defaultsESM.globals['ts-jest'],
      tsconfig: '<rootDir>/tsconfig.spec.json',
      isolatedModules: true
    }
  },
  globalSetup: 'jest-preset-angular/global-setup.mjs',
  moduleNameMapper: {
    ...ngPreset.defaultsESM.moduleNameMapper,
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>' }),
    rxjs: '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js'
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest-esm.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|@datorama|tslib)'],

  testPathIgnorePatterns: ['<rootDir>/node_modules/*', '<rootDir>/dist/*'],
  modulePathIgnorePatterns: ['<rootDir>/dist/*', '<rootDir>/projects/schematics/dist/*'],
  testMatch: ['**/app/**/+(*.)+(spec).+(ts)?(x)'],
  moduleDirectories: ['node_modules', 'src/app'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '(.)+(module).ts$',
    '<rootDir>/main.ts',
    '(.)+(mocks).ts$',
    '(.)+(factory).ts$',
    '(.)+(stories).ts$',
    'index.ts',
    'public-api.ts',
    '(.)+(config).ts$',
    '(.)+(query).ts$',
    '(.)+(store).ts$',
    '(.)+(export).ts$',
    '(.)+(interceptor).ts$'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov'],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage',
        outputName: 'test-report.xml',
        reportedFilePath: 'absolute'
      }
    ]
  ],
  rootDir: '<rootDir>/../../..'
};
export default baseConfig;
