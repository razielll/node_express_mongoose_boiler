const Example = require('../models/exampleModel.js');


module.exports = app => {

    // List all items in our example DB
    app.get('/example', async (req, res) => {
        try {
            const example = await Example.find({});
            res.send(example);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // Create a name item, post body JSON with { "name" : "something" }
    app.post('/example', async (req, res) => {
        const example = new Example(req.body);
        try {
            await example.save();
            res.send(example);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // delete by id
    app.delete('/example/:id', async (req, res) => {
        const _id = req.params.id;
        try {
            const example = await Example.findByIdAndDelete(_id)
            if (!example) {
                res.status(404).send("No item found");
            } else {
                res.status(200).send('Deleted');
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })

    // Update
    app.post('/example/:id', async (req, res) => {
        const _id = req.params.id;
        const newData = JSON.parse(JSON.stringify(req.body))
        await Example.findOneAndUpdate({ _id }, newData).orFail(() => Error('Not found'));
        return res.status(200).send('Done update');
    });
};