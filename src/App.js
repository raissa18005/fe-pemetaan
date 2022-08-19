import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CultureMap from "./pages/CultureMap/CultureMap";
import Home from "./pages/Home/Home";
import "./App.css";
import Cultures from "./pages/Cultures/Cultures";
import CultureDetail from "./pages/CultureDetail/CultureDetail";
import DynamicMap from "./pages/DynamicMap/DynamicMap";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/map" element={<CultureMap />} />
                        <Route path="/dynamicmap" element={<DynamicMap />} />
                        <Route path="/permainan">
                            <Route index element={<Cultures />} />
                            <Route
                                path=":cultureId"
                                element={<CultureDetail />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
