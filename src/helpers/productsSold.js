export function totalProductsSold(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].sold;
    }
    return sum;
}

export function totalProductsInStock(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].originalStock;
    }
    return sum;
}


export function productsToBeSold(stock, sold) {
    return stock - sold;
}

