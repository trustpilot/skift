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
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/fileMock.js",
  }
}
