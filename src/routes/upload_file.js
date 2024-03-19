module.exports = function (fastify, opts, next) {
    const fs = require('fs-extra')
    const util = require('util')
    const { pipeline } = require('stream')
    const pump = util.promisify(pipeline)
    // const settings = require("../models/settings");

    fastify.post('/', async function (req, reply) {
        let path_return = []
        let path_local
        let path_file;
        const parts = req.parts()
        for await (const part of parts) {
            if (part.type == 'field') {
                if (part.fieldname == 'path') {
                    // console.log(part);
                    // console.log(part.value);
                    path_file = 'D:/file_serve/' + part.value;
                    path_local = '/' + part.value;
                }
                // console.log('fieldname', part.fieldname);
                // console.log('value', part.value);
            }
            if (part.type === 'file') {
                if (!fs.existsSync(path_file)) {
                    fs.mkdirSync(path_file, { recursive: true });
                }
                path_return.push(path_local + part.filename)
                await pump(part.file, fs.createWriteStream(path_file + part.filename))
            }
        }
        return path_return;
    })

    fastify.post('/new', async function (req, reply) {
        let path_return = []
        let path_local
        let path_file;
        const parts = req.parts()
        for await (const part of parts) {
            if (part.type == 'field') {
                if (part.fieldname == 'path') {
                    // console.log(part);
                    // console.log(part.value);
                    path_file = 'D:/file_serve/' + part.value;
                    path_local = '/' + part.value;
                }
                // console.log('fieldname', part.fieldname);
                // console.log('value', part.value);
            }
            if (part.type === 'file') {
                if (!fs.existsSync(path_file)) {
                    fs.mkdirSync(path_file, { recursive: true });
                }
                // http://10.200.90.152:30000/
                path_return.push({
                    filename: part.filename,
                    path: "http://10.200.90.152:30000" + path_local + part.filename,
                    delete_path: path_local + part.filename,
                })
                console.log('value', path_return);
                await pump(part.file, fs.createWriteStream(path_file + part.filename))
            }
        }
        return path_return;
    })
    next()
}