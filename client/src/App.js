import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
    return (
        <>
            <BrowserRouter>
                <AppContext>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/category/:id"
                            element={<Category />}
                        />
                        <Route
                            exact
                            path="/product/:id"
                            element={<SingleProduct />}
                        />
                    </Routes>
                    <NewsLetter />
                    <Footer />
                </AppContext>
            </BrowserRouter>
        </>
    );
}

export default App;
