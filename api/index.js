const express = require("express");
const usersRouter = require("./routes/users");
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config"); 


const app = express();
app.use(bodyParser.json()); 
app.use(cors()); 
 
mongoose.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@sencer.ul87v.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e);
        }
        else{
            console.log("Connected to database");
        }
    }
    );


const isLoggedIn = true;
app.use('/',(req,res,next)=>{
    if(!isLoggedIn){
        res.send("Not logged in!");
    }
    else{ 
        next();
    }
});

app.get('/',(req,res)=>{
    res.send("Index");
});

app.use('/users',usersRouter);

app.listen(port,()=> {
    console.log(`Server is running on ${port} PORT`);
});

