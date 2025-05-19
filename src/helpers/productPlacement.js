export function createNameString(tvObj) {
    if (!tvObj.brand || !tvObj.name || !tvObj.type) {
        return 'Unknown TV details. Contact support.';
    }
    return `${tvObj.brand} ${tvObj.type} – ${tvObj.name}`;
}

export function priceFormatter(tvObj) {
    if (!tvObj.price) {
        return 'Price unknown. Contact support.';
    }
    return `€${tvObj.price},–`;
}

export function getScreenSizes(tvObj) {
    let sizes = tvObj.availableSizes;
    let result = "";
    for (let i = 0; i < sizes.length; i++) {
        if (i === sizes.length - 1) {
            result += `${sizes[i]} inches (${sizes[i] * 2.54.toFixed()} cm)`;
        } else {
            result += `${sizes[i]} inches (${sizes[i] * 2.54.toFixed()} cm) | `;
        }
    }
    return result;
}