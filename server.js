    var express = require('express'); 
    var app = express(); 
    var bodyParser = require('body-parser');
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
    var mongojs = require('mongojs');
    var db = mongojs('imageupload', ['coll_file']);

    app.use(express.static(__dirname+"/public"));
    app.use(bodyParser.json());

app.post('/fileupload',function(req,res){
    db.coll_file.insert(req.body,function(err,doc){
           res.json("true");
      });

});

app.listen('3000')
console.log('running on 3000');
   



