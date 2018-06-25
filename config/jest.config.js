const path = require('path');

module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  testMatch: [
    '**/?(*.)+(spec|test).(ts|js)'
  ],
  rootDir: path.resolve(__dirname, '..')
}
