const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settings = new Schema({

}, { strict: false, timestamps: true, versionKey: false });

const UserModule = mongoose.model("settings", settings);

module.exports = UserModule;