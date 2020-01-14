const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const exampleModel = require('./models/exampleModel.js');

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
// mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.use(express.json()); // Make sure it comes back as json
app.use(express.urlencoded({ extended: true })); // Make sure it comes back as json

// const uri = PATH_TO_MB i.e. mongodb+srv://Username:PW@some mongo connection string
mongoose.connect(uri);

const addExampleRoute = require('./routes/exampleRouter.js');
// a function we pass app into ! will give our app all the example routes
addExampleRoute(app);

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('app listening on port 3000!'));