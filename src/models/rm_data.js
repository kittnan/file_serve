const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rm_data = new Schema({
    // RM_no: String,
    IssueDate: Date,
    // ProductType: String,
    // Model: String,
    // GroupProcess: String,
    // OccurProcess: String,
    // LineNo: String,
    // RepairProcess: String,
    // Qty: String,
    // DefectCode: String,
    // DefectName: String,
    // Defect950: String,
    // Detail: String,
    // LotNo: [],
    // SerialNo: [],
    // PDApprove: String,
    // PDReview: String,
    // PDIssue: String,
    // JudgementQA: String,
    // JudgementQADetail: String,
    // QAApprove: String,
    // QAReview: String,
    // StatusRequest: String,
    // Log: [],
    // Repair_lotNo: String,
    // Location: String,
    // Remark: String,
}, { timestamps: true, versionKey: false, strict: false });

const UserModule = mongoose.model("rm_data", rm_data);

module.exports = UserModule;
