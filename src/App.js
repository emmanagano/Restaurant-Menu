import Categories from "./components/Categories";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { American, Appetizers, Breakfast, Entrees, Filipino, Pizza, SoupsAndSalads } from "./components/SubCategories";

function App () {
    return (
        <div className="app_container">
            <Header />
            <Categories />
            <Routes>
                <Route
                    path="/breakfast"
                    element={<Breakfast />}
                />
                <Route 
                    path="/appetizers"
                    element={<Appetizers />}
                />
                <Route
                    path="/entrees"
                    element={<Entrees />}
                />
                <Route
                    path="/american"
                    element={<American />}
                />
                <Route
                    path="/filipino"
                    element={<Filipino />}
                />
                <Route
                    path="/pizza"
                    element={<Pizza />}
                />
                <Route
                    path="/soups-salads"
                    element={<SoupsAndSalads />}
                />
            </Routes>
        </div>
    )
}

export default App;