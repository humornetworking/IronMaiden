var CH = require('../models/chisteModel')

module.exports = function(app){

    app.get('/', function(req, res){

        res.render('index', { title: 'Express' });
    })


    app.get('/consulta', function(req, res){

        res.render('consulta', { title: 'Consulta' });
    })

    var fs = require('fs');
    app.post('/save', function(req,res){

        // get the temporary location of the file
        var tmp_path = req.files.imageupload.path;
        // set where the file should actually exists - in this case it is in the "images" directory
        var target_path = './public/images/jaja.jpg';
        // move the file from the temporary location to the intended location
        fs.rename(tmp_path, target_path, function(err) {
            if (err) throw err;
            // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
            fs.unlink(tmp_path, function() {
                if (err) throw err;
                //res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
                res.render('index', { title: 'Express' });
            });
        });


    })
}