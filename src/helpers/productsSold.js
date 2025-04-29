import {inventory} from '../constants/inventory.js';

export function totalProductsSold(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].sold;
    }
    return sum;
}

console.log(totalProductsSold(inventory));

export function totalProductsInStock(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].originalStock;
    }
    return sum;
}

console.log(totalProductsInStock(inventory));

export function productsToBeSold(stock, sold) {
    return stock - sold;
}

console.log(productsToBeSold(totalProductsInStock(inventory), totalProductsSold(inventory)));