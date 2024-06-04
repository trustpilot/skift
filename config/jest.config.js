const path = require('path');

module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  preset: 'ts-jest',
  rootDir: path.resolve(__dirname, '..'),
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/styleMock.js',
    "\\.(svg)$": "<rootDir>/tests/svgMock.js"
  }
}
