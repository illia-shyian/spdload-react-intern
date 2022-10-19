import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./helpers";
import { MainPage } from "./components/pages/MainPage";

function App() {
    return (
        <div className="App">
            <ApolloProvider client={apolloClient}>
                <MainPage />
            </ApolloProvider>
        </div>
    );
}

export default App;
