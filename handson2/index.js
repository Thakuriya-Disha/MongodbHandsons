const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routes/employee");

const app = express();

app.use(bodyParser.json());
app.use(router);

app.get('/', (req,res) => {
    return res.send({message:"Welcome to Human Resource Database"});
})

app.listen(5050, () => {
    console.log("server is runnning");
})