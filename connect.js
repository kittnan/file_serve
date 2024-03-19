module.exports = async function (fastify, opts, next) {
    var mongoose = require('mongoose')
    // mongoose.connect("mongodb://10.200.90.152:27017/re-inspection_repair", { useNewUrlParser: true, useUnifiedTopology: true },(err=>{
    await mongoose.connect("mongodb://localhost:27017/re-use_material", { useNewUrlParser: true, useUnifiedTopology: true }).
        catch(error => handleError(error));
    console.log("connect");
    next()
}
