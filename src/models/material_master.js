const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const material_master = new Schema({
    material_code: String,
    material_name: String,
    serial_number_digit: String,
    Createdby: String,
}, { timestamps: true, versionKey: false });

const UserModule = mongoose.model("material_master", material_master);

module.exports = UserModule;
