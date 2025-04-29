import './App.css';

function App() {
    return (
        <main>
            <h1>Tech It Easy Dashboard</h1>

            <section className="overview-container">
                <h2>Verkoopoverzicht</h2>
                <div className="product-stats-container">
                    <article className="products-sold">
                        <p>Aantal verkochte producten</p>
                        <p>101</p>
                    </article>
                    <article className="products-stock">
                        <p>Aantal verkochte producten</p>
                        <p>102</p>
                    </article>
                    <article className="products-to-sell">
                        <p>Aantal verkochte producten</p>
                        <p>103</p>
                    </article>
                </div>
            </section>

            <section className="overview-container">
                <h2>Best verkochte TV</h2>
                <article className="popular-product-container">
                    <div className="img-container"><img src="/assets/tech_it_easy.png" alt="test-image"/>
                    </div>
                    <div className="product-info-container">
                        <h3 className="title">Samsung UHD 55AU7040 - Crystal</h3>
                        <p className="price">€549,-</p>
                        <p className="sizes">43 inch (109 cm) | 50 inch (127 cm) | 55 inch (140 cm) | 65 inch
                            (165 cm)</p>
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
