import isPackageDep from '../index';

it('return wheter the package is installed or not', async () => {
  expect(await isPackageDep('jest')).toBe(true);
});
