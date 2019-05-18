import React from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";
import { BodyWrapper } from "./styles/bodyWrapper";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Router from "./Routes";

import store from "./store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />

            <Header />
            <BodyWrapper>
                <Router />
            </BodyWrapper>
            <Footer />
        </Provider>
    );
};

export default App;
