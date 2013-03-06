
function events(server) {

    var chisteModel = require('../models/chisteModel')
    var io = require('socket.io').listen(server);
    io.sockets.on('connection', function (socket) {


        socket.on('addChiste', function (data) {

            if (data != null) {

                chisteModel.new(data, function(o){

                })

            }


        });

        socket.on('getChistes', function (data) {

            chisteModel.list(function(e, subs){
                socket.emit('listChistes', subs);
            })

        });



    });

}

module.exports.events = events;