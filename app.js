// const data = require('/data_store')
const express = require('express');
const app = express();
const port = process.argv[2]||8000;

app.listen(port, function(){
  console.log("Listen on port"+ port+". Go to http://localhost:"+port+"/");
});
