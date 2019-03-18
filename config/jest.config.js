const path = require('path');

module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    '**/?(*.)+(spec|test).(ts|js)'
  ],
  rootDir: path.resolve(__dirname, '..'),
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/styleMock.js',
    "\\.(svg)$": "<rootDir>/tests/svgMock.js"
  }
}
