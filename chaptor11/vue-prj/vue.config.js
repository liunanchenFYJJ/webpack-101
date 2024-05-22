const {
  defineConfig,
} = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// module.exports = defineConfig((config) => ({
//   transpileDependencies: true,
//   devServer: {
//     port: 3000,
//   },
// }));

module.exports = {
  configureWebpack: (config) => {
    console.log(config);
    return {
      mode: 'development',
      devtool: false,
    };
  },
};
