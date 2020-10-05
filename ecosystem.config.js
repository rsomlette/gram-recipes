/* eslint import/no-commonjs: off */
const path = require("path");

module.exports = {
  apps: [buildBackendProcessInfo(), buildWebsiteProcessInfo()],
  time: true,
};

const buildBackendProcessInfo = () => ({
  name: `grapqhl-mongo`,
  cwd: path.join(__dirname, `server`),
  script: "yarn",
  args: "start",
});

const buildWebsiteProcessInfo = () => ({
  name: "recipe-app",
  cwd: path.join(__dirname, "frontend/web"),
  script: "yarn",
  args: "start",
});
