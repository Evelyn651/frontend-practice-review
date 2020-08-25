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
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());
console.log(stars);

//block scope practice
function logVisibleLightWaves(){
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if(region === 'The Arctic'){
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }
    console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);//not accessible because it was declared within the function scope

