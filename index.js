const express = require('express');
const port = 8000;


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('assets'));
app.use('/', require('./routers'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, function(err){

    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is up and running on port: ${port}`);

});