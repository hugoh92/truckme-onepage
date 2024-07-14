module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testMatch: ['**/tests/unit/**/*.spec.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/'],
};

