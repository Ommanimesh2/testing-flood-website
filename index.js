const express=require('express');

const app=express();
const PORT=process.env.PORT ||8080
var path = require('path');
 
app.use(express.static("assets"));



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept');
  next();
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.get('/twitter-tab',(req,res)=>{
  res.sendFile(path.join(__dirname + '/twitter-tab.html'));
})
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})











 