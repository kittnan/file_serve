module.exports = function (fastify, opts, next) {
    const fs = require('fs-extra')

    fastify.post('/', async function (req, reply) {
        const path_file = req.body.path_file;
        console.log('path', path_file);
        if (path_file != '' && path_file != undefined && path_file != null) {
            await fs.rmSync('D:/file_serve/' + path_file, { force: true, recursive: true });
            return { succeed: 'succeed' }
        }
        else return 'fail'
        // return fs.rmSync('D:/file_serve/' + path_file, { recursive: true });
        // await reply.send('succeed');
    })

    // fastify.delete("/delete/:id", async (req, res, next) => {
    //     const { id } = req.params;
    //     try {
    //         res.send(await settings.deleteOne({ _id: id }));
    //     } catch (error) {
    //         console.log(error);
    //         res.send(error);
    //     }
    // });
    next()
}