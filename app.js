// require libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    console.log(req.query)
    res.render('home');
});

app.get('/greetings/:name', (req, res) => {
    //get the name from path
    const name = req.params.name;
    // render the greetings view and send the name
    res.render('greetings', {name});
})

// Start Server
app.listen(3000, () => {
    console.log("running on localhost:3000")
});