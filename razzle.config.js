const BundleAnalyzerPlugin = require('webpack-bundle-analyzer') // eslint-disable-line import/no-extraneous-dependencies, prefer-destructuring
  .BundleAnalyzerPlugin;

module.exports = {
  modify: (config, { target, dev }) => {
    const appConfig = config;
    if (!dev) {
      /*
        This is a hack to disable linting on the production build.
        Linting is the first object in the rules away and this removes it.
        A prod build will fail if the API changes so it is fairly safe.
      */
      appConfig.module.rules.shift();
      // Setup bundle analyser
      if (target === 'web') {
        appConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'gzip',
            generateStatsFile: true,
            openAnalyzer: false,
            reportFilename: '../../webpackBundleReport.html',
            statsFilename: '../../webpackBundleReport.json',
          }),
        );
      }
    }

    // This is to override bundle performance test
    appConfig.performance = Object.assign(
      {},
      {
        maxAssetSize: 350000,
        maxEntrypointSize: 350000,
      },
    );
    return appConfig;
  },
};
