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
    console.log(getAmbilight(inventory));
}

// opdracht 1a
export function getNames(data) {
    return data.map((value) => {
        return value.name;
    });
}

// opdracht 1b
export function getSoldOut(data) {
    return data.filter((value) => {
        return value.originalStock - value.sold <= 0;
    });
}

// opdracht 1c
export function getProductType(data) {
    return data.find((value) => {
        return value.type === 'NH3216SMART';
    });
}

// Opdracht 1d
export function getHighRefreshRate(data) {
    return data.map((value) => {
        return {
            name: `${value.brand} ${value.name}`,
            suitable: value.refreshRate >= 100
        };
    });
}

// Opdracht 1e (uitdaging)
export function getBigScreenSize(data) {
    return data.filter((value) => {
        return value.availableSizes.find((sizes) => {
            return sizes >= 65;
        });
    });
}

// Opdracht 1f (uitdaging)
export function getAmbilight(data) {
    return data.filter((value) => {
        return value.options.find((options) => {
            return options.name === 'ambiLight' && options.applicable === true;
        });
    });
}

export default showOutcomeInConsole;
