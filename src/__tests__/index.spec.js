/* eslint global-require: 0 */

import path from 'path';

const fixturePath = path.join(process.cwd(), 'fixtures');

const mockPkgUp = () => jest.doMock('read-pkg-up', () => ({
  sync: () => ({
    pkg: null,
  }),
}));

it('should return true to package being installed', async () => {
  const isPackageDep = require('../index').default;

  expect(isPackageDep('jest')).toBe(true);
});

it('should return false to package being installed', () => {
  const isPackageDep = require('../index').default;

  expect(isPackageDep('mocha')).toBe(false);
});

it('should return true to package being installed on different folder', () => {
  // Mock read-pkg-up so it doesn't return true for upwards `package.json`
  mockPkgUp();

  const isPackageDep = require('../index').default;

  expect(isPackageDep('someDep', { baseDir: fixturePath })).toBe(true);
});

it('should return false to package being installed on different folder', () => {
  // Mock read-pkg-up so it doesn't return true for upwards `package.json`
  mockPkgUp();

  const isPackageDep = require('../index').default;
  expect(isPackageDep('jest', { baseDir: fixturePath })).toBe(false);
});
