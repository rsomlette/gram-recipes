/* eslint import/no-commonjs: off */
const path = require("path");

const buildBackendProcessInfo = () => ({
  name: `grapqhl-mongo`,
  cwd: path.join(__dirname, `server`),
  script: "yarn",
  args: "server",
});

const buildWebsiteProcessInfo = () => ({
  name: "recipe-app",
  cwd: path.join(__dirname, "frontend/web"),
  script: "yarn",
  args: "start",
});

module.exports = {
  apps: [buildBackendProcessInfo(), buildWebsiteProcessInfo()],
  time: true,
};
