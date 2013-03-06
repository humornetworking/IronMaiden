var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

var dPort = 27017;
var dHost = "localhost";
var dName = "video5";

var CH = {};

CH.db = new Db(dName, new Server(dHost, dPort, {auto_reconnect: true},{}));
CH.db.open(function(e,d){
    if(e){
        console.log(e)
    }else{
        console.log("Conectado a la base de datos: "+dName);
    }
});

CH.chistes = CH.db.collection('chistes');

module.exports = CH;

CH.new = function(newData, callback){

            CH.chistes.insert(newData, callback(null))

}

CH.list = function(callback){
    CH.chistes.find().toArray(function(e,res){
        if(e){
            callback(e)
        }else{
            callback(null, res)
        }
    })
}