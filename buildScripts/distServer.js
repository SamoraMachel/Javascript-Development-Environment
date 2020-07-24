import express from "express";
import { join } from "path";
import open from "open";

// uncomment the following line to enable G-ZIP compression
// import compression from 'compression';

/* eslint-disable no-console */

const port = 3300;
const app = express();

// uncomment the following line to enable G-ZIP compression
// app.use(compression());
// support serving up static files
app.use(express.static('dist'));

app.get("/", function(req, res){
    res.sendFile(join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  // hard coding for simplicity, Pretending this hits a real database
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@yahoo.com"},
    {"id": 3, "firstName":"Tina", "lastName":"Lee", "email":"lee.tina@hotmail.com"},
  ]);
});

app.listen(port, function(err){
    if (err){
        console.log(err);
    } else{
        open("http://localhost:" + port);
    }
})
