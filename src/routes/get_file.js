module.exports = function (fastify, opts, next) {
    const fs = require('fs-extra')

    fastify.post('/', async function (req, reply) {
        const path_file = req.body.path_file;
        // console.log('path', path_file);
        // fs.rmSync('./uploads/' + path_file, { recursive: true });
        return path_file
    })
    next()
}