const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    user_name: {
        type: String,
        //required: true,
    },
    user_id: {
        type: String,
        //required: true,
    },
    user_password: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
    },
    authorize: [
        //type: String,
        // required: true
    ],
    createdBy: {
        type: String,
        // required: true,
        default: "Admin"
    }
}, { timestamps: true, versionKey: false });

const UserModule = mongoose.model("user", user);

module.exports = UserModule;