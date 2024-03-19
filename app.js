// let express = require("express");
const Fastify = require('fastify')
// const compression = require('compression');
// const cache = require("./cache");
// const { gzip, ungzip } = require('node-gzip');
// const crypto = require('crypto');
const path = require('path')

async function build() {
    fastify = Fastify({ logger: true })
    await fastify.register(require('@fastify/multipart'), {
        limits: {
            // fieldNameSize: 100, // Max field name size in bytes
            // fieldSize: 100,     // Max field value size in bytes
            // fields: 10,         // Max number of non-file fields
            fileSize: 100000000,  // For multipart forms, the max file size in bytes
            // files: 1,           // Max number of file fields
            // headerPairs: 2000,  // Max number of header key=>value pairs
            // parts: 1000         // For multipart forms, the max number of parts (fields + files)
          }
    })
    await fastify.register(require('@fastify/formbody'))
    await fastify.register(require('@fastify/middie'), {
        hook: 'onRequest' // default
    })
    await fastify.use(require('cors')())

    fastify.register(require('@fastify/static'), {
        root: path.join('D:/', 'file_serve'),
        prefix: '/',
        index: false,
        list: {
            format: 'json',
            jsonFormat: 'names',
        }
    })

    // await fastify.register(require('@fastify/caching'), { global: true })
    // await fastify.register(require("./connect"));
    await fastify.register(require('./src/routes/upload_file'), { prefix: '/upload' })
    await fastify.register(require('./src/routes/delete_file'), { prefix: '/delete' })
    await fastify.register(require('./src/routes/get_file'), { prefix: '/get' })
    return fastify
}
const port = 30000;

build()
    .then(fastify => fastify.listen(port, '0.0.0.0'))
    .catch(console.log)

// fastify.addHook('preHandler', async (request, reply) => {
//     console.log(request.url);
//     // console.log(request.method);
//     if (request.method == 'GET') {
//         if (cache.has(request.url)) {
//             console.log(cache.keys());
//             console.log(cache.getStats());
//             console.log(Math.round(cache.getStats().vsize / 1024));
//             reply.header('Content-Encoding', 'gzip')
//             // reply.header('Transfer-Encoding', 'chunked')
//             // reply.header('Vary', 'Accept-Encoding')
//             // reply.header('content-type', 'application/json; charset=utf-8')
//             reply.send(await (cache.get(request.url)));
//         }
//     }
//     else {
//         console.log(request.url.split('/')[1]);
//         console.log(cache.keys());
//         cache.keys()?.forEach(element => {
//             // console.log(element);
//             if (element.includes(request.url.split('/')[1])) {
//                 cache.del(element)
//             }
//         });
//     }
// })

// fastify.addHook('onSend', async (request, reply, payload) => {
//     // console.log(request.url);
//     // console.log(request.method);
//     if (request.method == 'GET') {
//         if (!cache.has(request.url)) {
//             gzip(payload).then((compressed) => {
//                 cache.set(request.url, compressed);
//             })
//         }
//     }
// })

// module.exports = fastify;