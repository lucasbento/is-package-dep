import isPackageDep from '../index';

it('return wheter the package is installed', async () => {
  expect(await isPackageDep('jest')).toBe(true);
});

it('return wheter the package is not installed', async () => {
  expect(await isPackageDep('mocha')).toBe(false);
});
