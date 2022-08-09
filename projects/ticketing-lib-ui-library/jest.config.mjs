import path from 'path';
import { baseConfig } from '../../jest.base.config.mjs';

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      ...baseConfig.globals['ts-jest'],
      tsconfig: 'projects/ticketing-lib-ui-library/tsconfig.lib.spec.json'
    }
  },
  testMatch: ['**/projects/ticketing-lib-ui-library/**/+(*.)+(spec).+(ts)?(x)'],
  collectCoverageFrom: ['projects/ticketing-lib-ui-library/src/**/*.ts'],
  coverageDirectory: path.join(baseConfig.rootDir, '/coverage/ticketing-lib-ui-library'),
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage/ticketing-lib-ui-library',
        outputName: 'test-ticketing-lib-ui-library-report.xml',
        reportedFilePath: 'absolute'
      }
    ]
  ]
};
export default config;
