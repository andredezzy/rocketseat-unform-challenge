import React from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";
import { BodyWrapper } from "./styles/bodyWrapper";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import store from "./store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />

            <Header />
            <BodyWrapper>
                <List />
            </BodyWrapper>
            <Footer />
        </Provider>
    );
};

export default App;
