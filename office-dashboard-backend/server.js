require('dotenv').config;
const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');
const port = process.env.PORT || 8180;
const cors = require('cors');
const uuid = require('uuid').v4
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions.js');
const { loger } = require('./middleware/logemodule');
const errorHandlers = require('./middleware/errorhandler');


//middel ware
//app.use(express.json());
//app.use(express.urlencoded());

// Use cookie-parser middleware
app.use(cookieParser());
app.use(loger)//error catch function
app.use(bp.json());
app.use(errorHandlers);//error catch function
app.use(cors(corsOptions))
app.use(bp.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));






//route's
// app.use(require('./routes/root.js'));
// app.use(require('./routes/admin.js'));
// app.use(require('./routes/login.js'));
//Api
//app.use(require('./routes/api/rootApi.js'));
app.use(require('./routes/api/userApi.js'));
app.use(require('./routes/api/adminApi.js'));







//default route's
app.all('/*$', (req, res) => {
    res.status(404);
    if (req.accepts('.html')) {
        res.sendFile(path.join(__dirname, 'view', 'Action', '404.html'));
    }
    else if (req.accepts('.json')) {
        res.json({ "error": "404 Not Found" });
    }
    else {
        res.type('.txt').send("404 Not Found");
    }

});





////hoster
app.listen(port, () => {
    console.log(`Project host ON: http://localhost:${port}`)
});
