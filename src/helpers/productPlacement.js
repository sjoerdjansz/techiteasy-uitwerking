export function createNameString(arr) {
    if (!arr.brand || !arr.name || !arr.type) {
        return 'Unknown TV details. Contact support.';
    }
    return `${arr.brand} ${arr.type} ${arr.name}`;
}

export function priceFormatter(arr) {
    if (!arr.price) {
        return 'Price unknown. Contact support.';
    }
    return `€${arr.price},–`;
}

export function getScreenSizes(arr) {
    let sizes = arr.availableSizes;
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