/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    '.',
    'node_modules',
  ],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
};
