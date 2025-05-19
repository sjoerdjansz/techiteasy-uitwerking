import {getScreenSizes, priceFormatter, createNameString} from "./productPlacement.js";
import {productsToBeSold, totalProductsInStock, totalProductsSold} from "./productsSold.js";
import {inventory, bestSellingTv} from "../constants/inventory.js";

export function logsFromExerciseOne() {
    console.log(`Opdracht 1a ${totalProductsSold(inventory)}`);
    console.log(`Opdracht 1c ${totalProductsInStock(inventory)}`);
    console.log(`Opdracht 1e ${productsToBeSold(totalProductsInStock(inventory), totalProductsSold(inventory))}`);

    console.log(`Opdracht 2a ${createNameString(bestSellingTv)}`);
    console.log(`Opdracht 2b ${priceFormatter(bestSellingTv)}`);
    console.log(`Opdracht 2c ${getScreenSizes(bestSellingTv)}`);
}
