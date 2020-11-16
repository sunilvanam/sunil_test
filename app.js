const express = require('express');

const app = express();
const fs = require('fs')
app.listen(9000, function(req, res){
   
});

app.get('/get-meta-data/:module_name/:screen_name', function(req, res){
    const module_name = req.params.module_name;
    const screen_name = req.params.screen_name;

    let path = module_name + '/'+screen_name+'.json';

    if (fs.existsSync(path)) {
        let jsonData = JSON.parse(fs.readFileSync(path, 'utf-8'));
        res.send(jsonData);
    }else{
        res.send("Incorrect module/screen name");
    }

})

