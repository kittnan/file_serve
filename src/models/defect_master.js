const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defect_master = new Schema({
    // process_no: String,
    // process_code: String,
    // process_name: String,
    // group_process: String,
    // Product_Type: String,
    // Createdby: String,
    // Updateby: String,
}, { timestamps: true, versionKey: false, strict: false });

const UserModule = mongoose.model("defect_master", defect_master);

module.exports = UserModule;
