import socketio from 'socket.io-client';

const socket = socketio('http://192.168.15.6:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){
    //enviando os parametros pro backend
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();

};

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
};

export{ 
    connect,
    disconnect,
    subscribeToNewDevs,
}