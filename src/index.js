import readPkgUp from 'read-pkg-up';

export default (dependency, { baseDir } = {}) =>
  new Promise((resolve, reject) => {
    readPkgUp({
      cwd: baseDir,
    })
      .then(({ pkg }) => {
        const dependencies = [
          ...Object.keys(pkg.dependencies),
          ...Object.keys(pkg.devDependencies),
        ];

        return resolve(dependencies.includes(dependency));
      })
      .catch(reject);
  });
