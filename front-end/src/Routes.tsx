import React from "react";
import { Route } from "react-router-dom";

import List from "./components/List";
import Form from "./components/Form";

const Router = () => (
    <>
        <Route exact path="/" component={List} />
        <Route path="/register" component={Form} />
    </>
);

export default Router;
