import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./helpers";
import { MainPage } from "./components/pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { FavoritesPage } from "./components/pages/FaivoritesPage";

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <BrowserRouter>
                    <ApolloProvider client={apolloClient}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />

                            <Route
                                path="/favorites"
                                element={<FavoritesPage />}
                            />
                        </Routes>
                    </ApolloProvider>
                </BrowserRouter>
            </RecoilRoot>
        </div>
    );
}

export default App;
