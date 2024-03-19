const NodeCache = require("node-cache");
module.exports = new NodeCache({ stdTTL: 1800, useClones: false });