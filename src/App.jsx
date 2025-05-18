import './App.css';

// helper functions
import {totalProductsSold, totalProductsInStock, productsToBeSold} from "./helpers/productsSold.js";
import {
    createNameString,
    getScreenSizes,
    priceFormatter,
} from "./helpers/productPlacement.js";
import {logsFromExerciseOne} from "./helpers/logger.js";

// data
import {inventory, bestSellingTv} from "./constants/inventory";

// icons
import check from './assets/check.png';
import minus from './assets/minus.png';

function App() {
    function handleClick(e) {
        console.log(e.target.innerText);
    }

    // opdracht 1a
    const getNames = (data) => {
        const result = data.map((value) => {
            return value.name;
        });
        console.log(result);
    };

    // getNames(inventory);

    // opdracht 1b

    const getSoldOut = (data) => {
        const result = data.filter((value) => {
            return value.originalStock - value.sold <= 0;
        });
        console.log(result);
    };

    // getSoldOut(inventory);

    // opdracht 1c

    const getProductType = (data) => {
        const result = data.find((value) => {
            return value.type === 'NH3216SMART';
        });
        console.log(result);
    };

    // getProductType(inventory);

    /*Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen
    waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van
    100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }.
    Log de uitkomst in de console.
    */

    const getHighRefreshRate = (data) => {
        data.filter((value) => {
            if (value.refreshRate >= 100) {
                console.log({
                    name: `${value.brand} ${value.name}`,
                    suitable: true
                });
            } else {
                console.log({
                    name: `${value.brand} ${value.name}`,
                    suitable: false
                });
            }
        });
    };

    getHighRefreshRate(inventory);

    // logsFromExerciseOne();


    return (
        <main>
            <h1>Tech It Easy Dashboard</h1>

            <section className="overview-container">
                <h2>Verkoopoverzicht</h2>
                <div className="product-stats-container">
                    <article className="products-sold">
                        <p>Aantal verkochte producten</p>
                        <p>{totalProductsSold(inventory)}</p>
                    </article>
                    <article className="products-stock">
                        <p>Aantal ingekochte producten</p>
                        <p>{totalProductsInStock(inventory)}</p>
                    </article>
                    <article className="products-to-sell">
                        <p>Aantal te verkopen producten</p>
                        <p>{productsToBeSold(totalProductsInStock(inventory), totalProductsSold(inventory))}</p>
                    </article>
                </div>
            </section>
            <section className="overview-container">
                <h2>Best verkochte TV</h2>
                <article className="popular-product-container">
                    <div className="img-container"><img src={bestSellingTv.sourceImg} alt="test-image"/>
                    </div>
                    <div className="product-info-container">
                        <h3 className="title">{createNameString(bestSellingTv)}</h3>
                        <p className="price">{priceFormatter(bestSellingTv)}</p>
                        <p className="sizes">{getScreenSizes(bestSellingTv)}</p>
                        <ul className="options">
                            <li><img src={check} alt="check-icon"/>wifi</li>
                            <li><img src={minus} alt="minus-icon"/>speech</li>
                            <li><img src={check} alt="check-icon"/>hdr</li>
                            <li><img src={check} alt="check-icon"/>bluetooth</li>
                            <li><img src={minus} alt="minus-icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="overview-container">
                <h2>Alle Televisies</h2>
                <div className="filter-container">
                    <button onClick={handleClick} className="filter-btn" type="button">Meest verkocht
                    </button>
                    <button onClick={handleClick} className="filter-btn" type="button">Goedkoopste</button>
                    <button onClick={handleClick} className="filter-btn" type="button">Geschikt voor sport
                    </button>
                </div>
                <div className="filter-result-container">
                    Resultaten hier...
                </div>
            </section>
        </main>

    );
}

export default App;
