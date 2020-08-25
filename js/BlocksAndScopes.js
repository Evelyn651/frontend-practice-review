const city = 'New York City';

function logCitySkyline(){
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
    console.log(logCitySkyline());
}

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky(){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

//block scope practice
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);//not accessible because it was declared within the function scope