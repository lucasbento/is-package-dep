import isPackageDep from '../index';

it('verify a dependency', async () => {
  expect(await isPackageDep('jest')).toBe(true);
});

it('verify a non-dependency', async () => {
  expect(await isPackageDep('mocha')).toBe(false);
});
