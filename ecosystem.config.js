/* eslint import/no-commonjs: off */
const path = require("path");

module.exports = {
  apps: [buildBackendProcessInfo(), buildWebsiteProcessInfo()],
  time: true,
};

function buildBackendProcessInfo() {
  return {
    name: `grapqhl-mongo`,
    cwd: path.join(__dirname, `server`),
    script: "yarn",
    args: "start",
  };
}

function buildWebsiteProcessInfo() {
  return {
    name: "recipe-app",
    cwd: path.join(__dirname, "frontend/web"),
    script: "yarn",
    args: "start",
  };
}
