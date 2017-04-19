var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log(id);
    }
};

app.initialize();
var randomGif = Math.floor(Math.random() * 5 + 1);
var switchGif = randomGif;
var currentSong = 1;
nextSong();

function nextSong() {
    document.getElementById('songPlayer' + currentSong).pause();
    document.getElementById('songPlayer' + currentSong).currentTime = 0; // mas flashero sin esto
    if (currentSong < 4) {
        currentSong += 1;
    } else {
        currentSong = 1;
    }
    document.getElementById('songPlayer' + currentSong).play();
    document.getElementById('songPlayer' + currentSong).onended = function() {
        nextSong();
    };


    switchGif = Math.floor(Math.random() * 5 + 1);
    if (randomGif !== switchGif) {
        randomGif = switchGif;
        document.getElementById('gifDisplay').src = './img/giphy_' + randomGif + '.gif';
    }

}

// function prevSong() {
//     document.getElementById('songPlayer' + currentSong).pause();
//     document.getElementById('songPlayer' + currentSong).currentTime = 0;
//     if (currentSong > 1) {
//         currentSong -= 1;
//     } else {
//         currentSong = 4;
//     }
//     document.getElementById('songPlayer' + currentSong).play();
// }

// function playSong() {
//     document.getElementById('songPlayer' + currentSong).play();
// }

// function stopSong() {
//     document.getElementById('songPlayer' + currentSong).pause();
// }