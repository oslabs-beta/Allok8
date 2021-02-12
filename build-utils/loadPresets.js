const { merge } = require('webpack-merge');

// we pull env into here to pass them down to configs at bottom of the function, allowing us to compose presets with flexibility
const applyPresets = (env) => {
  const { presets } = env;
  /** @type {string[]} */
  // flattening array
  const mergedPresets = [].concat(...[presets]);
  // calling presets one by one
  const mergedConfigs = mergedPresets.map(
    // eslint-disable-next-line global-require
    (presetName) => require(`./presets/webpack.${presetName}`)(env) // call the preset and pass env also
  );
  // just like object.assingn
  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
