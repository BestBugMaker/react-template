const { override, addWebpackResolve } = require("customize-cra");

module.exports = override(
    addWebpackResolve({
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    })
);
