const mongoose = require('mongoose');

const exampleModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (value.length < 0) throw new Error("Enter something.");
        }
    }
});

const Example = mongoose.model("Example", exampleModel);
module.exports = Example;