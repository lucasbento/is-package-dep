import readPkgUp from 'read-pkg-up';
import findDown from 'finddown-sync';
import readPkg from 'read-pkg';

const findPackageFile = ({ baseDir: cwd }) => {
  const pkgFile = 'package.json';

  // Check if there's a `package.json` file upwards
  const { pkg: packageUp } = readPkgUp.sync({
    cwd,
  });

  // If not found, check downwards
  if (!packageUp) {
    const files = findDown(pkgFile, {
      cwd,
      exclude: 'node_modules/',
    });

    // Nothing found :/
    if (!files.length) {
      return null;
    }

    // Found downwards, return human-readable `package.json`
    return readPkg.sync(files[0]);
  }

  // Found upwards
  return packageUp;
};

export default (dependency, options = {}) => {
  const pkg = findPackageFile(options);

  if (!pkg.dependencies && !pkg.devDependencies) {
    return false;
  }

  const dependencies = [
    ...Object.keys(pkg.dependencies || []),
    ...Object.keys(pkg.devDependencies || []),
  ];

  return dependencies.indexOf(dependency) !== -1;
};
