const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Suscribe to celebrity for Observer 1
celebrity.on('race win', function() {
    console.log('1. Congratulations! You won!');
});

// Suscribe to celebrity for Observer 2
celebrity.on('race lost', function() {
    console.log('2. I could have better than that!');
});

// PROCESS
process.on('exit', () => {
    console.log('Events finished!');
});

// OTRA FORMA
celebrity.on('race', (results) => {
    if (results == 'win')
        console.log('1. YOU WON!');
    else 
        console.log('2. YOU LOST!');
});

celebrity.emit('race win');
celebrity.emit('race lost');
celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');