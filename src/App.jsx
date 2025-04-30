import './App.css';

import {totalProductsSold, totalProductsInStock, productsToBeSold} from "./helpers/productsSold.js";
import {createNameString, getScreenSizes, priceFormatter} from "./helpers/productPlacement.js";
import {inventory, bestSellingTv} from "./constants/inventory";

function App() {
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
                        <p className="options">[check-icon] wifi [not-icon] speech [check-icon] hdr
                            [check-icon] bluetooth [not-icon] ambilight
                        </p>
                    </div>
                </article>
            </section>
        </main>

    );
}

export default App;
