const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return  planet['koi_disposition'] === 'CONFIRMED' && 
            planet['koi_insol'] > 0.36 && 
            planet['koi_insol'] < 1.11 &&
            planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({           // Devuelve un Event Emitter que maneja Streams de Data.
        comment: '#',
        columns: true       // Devolverá cada columna como un objeto (key, value)
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) habitablePlanets.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        // console.log(habitablePlanets);
        console.log(habitablePlanets.map(planet => {
            return planet['kepler_name'];
        }))
        console.log(`There are ${habitablePlanets.length} habitable planets!`);
        console.log("done");
    });



// parse();    

