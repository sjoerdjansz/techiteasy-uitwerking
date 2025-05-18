import {inventory} from './inventory.js';

function showOutcomeInConsole() {
    console.log('Uitkomst opdracht 1a');
    console.log(getNames(inventory));

    console.log('Uitkomst opdracht 1b');
    console.log(getSoldOut(inventory));

    console.log('Uitkomst opdracht 1c');
    console.log(getProductType(inventory));

    console.log('Uitkomst opdracht 1d');
    console.log(getHighRefreshRate(inventory));

    console.log('Uitkomst opdracht 1e (uitdaging)');
    console.log(getBigScreenSize(inventory));

    console.log('Uitkomst opdracht 1f (uitdaging)');
    console.log();


}

// opdracht 1a
const getNames = (data) => {
    return data.map((value) => {
        return value.name;
    });
};

// opdracht 1b
const getSoldOut = (data) => {
    return data.filter((value) => {
        return value.originalStock - value.sold <= 0;
    });
};

// opdracht 1c
const getProductType = (data) => {
    return data.find((value) => {
        return value.type === 'NH3216SMART';
    });
};

// Opdracht 1d
const getHighRefreshRate = (data) => {
    return data.map((value) => {
        return {
            name: `${value.brand} ${value.name}`,
            suitable: value.refreshRate >= 100
        };
    });
};

// Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar
// zijn in schermgroottes van 65 inch en groter.

// const getBigScreenSize = (data) => {

// };


// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over
// ambilight beschikken. Log de uitkomst in de console.

export default showOutcomeInConsole;
