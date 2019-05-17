import React from "react";

import GlobalStyle from "./styles/global";
import { BodyWrapper } from "./styles/bodyWrapper";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />

            <Header />
            <BodyWrapper>
                <List />
            </BodyWrapper>
            <Footer />
        </>
    );
};

export default App;
