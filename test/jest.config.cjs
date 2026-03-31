module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  testMatch: ['<rootDir>/unit/**/*.spec.js', '<rootDir>/functional/**/*.spec.js'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[jt]s$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@vue/test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
    '^@/(.*)$': '<rootDir>/../vurm-main/src/$1',
    '^@ionic/vue$': '<rootDir>/mocks/ionic-vue.js',
    '^ionicons/icons$': '<rootDir>/mocks/ionicons-icons.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
