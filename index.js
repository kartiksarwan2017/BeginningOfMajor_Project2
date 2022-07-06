const express = require('express');
const cookieParser = require('cookie-parser');
// Use Express Router
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static('./assets'));

// Use Express ejs Layouts
app.use(expressLayouts);

// extract style and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/', require('./routers'));

// Setting Up View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('assets'));





app.listen(port, function(err){

    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is up and running on port: ${port}`);

});