const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const stateRouter = require('./ReactRoutes');

app.use('/',stateRouter);


app.listen(3000,function(){
    console.log("Server running on 3000");
});
