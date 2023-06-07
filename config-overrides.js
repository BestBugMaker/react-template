const { override, addWebpackResolve, fixBabelImports } = require("customize-cra");

module.exports = override(
    addWebpackResolve({
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    }),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
    })
);
