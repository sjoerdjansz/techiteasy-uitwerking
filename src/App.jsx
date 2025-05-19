import "./App.css";

// helper functions
import {
    totalProductsSold,
    totalProductsInStock,
    productsToBeSold,
} from "./helpers/productsSold.js";
import {
    createNameString,
    getScreenSizes,
    priceFormatter,
} from "./helpers/productPlacement.js";

// import logger functies voor console.logs voor exercise 1 en 2
import {logsFromExerciseOne} from "./helpers/logger.js";
import showOutcomeInConsole from "./constants/oefenbestand.js";

// data
import {inventory, bestSellingTv} from "./constants/inventory";

// icons
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
    function sortTvSold(data) {
        return data.sort((a, b) => {
            return b.sold - a.sold;
        });
    }

    function sortTvPrice(data) {
        return data.sort((a, b) => {
            return a.price - b.price;
        });
    }

    function sortTvSport(data) {
        return data.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });
    }

    // loggers voor exercises 1 en 2
    // logsFromExerciseOne();
    // showOutcomeInConsole();

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
                        <p>
                            {productsToBeSold(
                                totalProductsInStock(inventory),
                                totalProductsSold(inventory)
                            )}
                        </p>
                    </article>
                </div>
            </section>
            <section className="overview-container">
                <h2>Best verkochte TV</h2>
                <article className="popular-product-container">
                    <div className="img-container">
                        <img src={bestSellingTv.sourceImg} alt="tv-image"/>
                    </div>
                    <div className="product-info-container">
                        <h3 className="title">{createNameString(bestSellingTv)}</h3>
                        <p className="price">{priceFormatter(bestSellingTv)}</p>
                        <p className="sizes">{getScreenSizes(bestSellingTv)}</p>
                        <ul className="options">
                            <li>
                                <img src={check} alt="check-icon"/>
                                wifi
                            </li>
                            <li>
                                <img src={minus} alt="minus-icon"/>
                                speech
                            </li>
                            <li>
                                <img src={check} alt="check-icon"/>
                                hdr
                            </li>
                            <li>
                                <img src={check} alt="check-icon"/>
                                bluetooth
                            </li>
                            <li>
                                <img src={minus} alt="minus-icon"/>
                                ambilight
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="overview-container">
                <h2>Alle Televisies</h2>
                <div className="filter-container">
                    <button
                        onClick={() => console.log(sortTvSold(inventory))}
                        className="filter-btn"
                        type="button"
                    >
                        Meest verkocht
                    </button>
                    <button
                        onClick={() => console.log(sortTvPrice(inventory))}
                        className="filter-btn"
                        type="button"
                    >
                        Goedkoopste
                    </button>
                    <button
                        onClick={() => console.log(sortTvSport(inventory))}
                        className="filter-btn"
                        type="button"
                    >
                        Geschikt voor sport
                    </button>
                </div>
                <div className="filter-result-container">
                    {/*{inventory.map((value, i) => {*/}
                    {/*    return <li key={i}>{value.type}</li>;*/}
                    {/*})}*/}
                    {inventory.map((value, i) => {
                        return (
                            <article key={i} className="popular-product-container">
                                <div className="img-container">
                                    <img src={value.sourceImg} alt="tv-image"/>
                                </div>
                                <div className="product-info-container">
                                    <h3 className="title">{createNameString(value)}</h3>
                                    <p className="price">{priceFormatter(value)}</p>
                                    <p className="sizes">{getScreenSizes(value)}</p>
                                    <ul className="options">
                                        {value.options.map((option, i) => {
                                            return option.applicable ? (
                                                <li key={i}>
                                                    <img src={check} alt="check-icon"/>
                                                    {option.name}
                                                </li>) : (
                                                <li key={i}>
                                                    <img src={minus} alt="minus-icon"/>
                                                    {option.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

export default App;
