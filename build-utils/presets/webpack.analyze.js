const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = () => ({
  plugins: [new BundleAnalyzerPlugin()],
});
