const {
  override,
  addDecoratorsLegacy,
  addBundleVisualizer,
  addWebpackAlias,
} = require("customize-cra");

const path = require("path");

module.exports = override(
  // 启用装饰器语法
  addDecoratorsLegacy(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  // 配置路径别名
  addWebpackAlias({
    "@": path.join(__dirname, "src"),
  })
);
