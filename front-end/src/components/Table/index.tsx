import React from "react";

import { Container } from "./styles";

interface IProps {
    children?: JSX.Element[] | JSX.Element;
    id?: string;
}

export default function Table(props: IProps) {
    return (
        <Container id={props.id}>
            <table>{props.children}</table>
        </Container>
    );
}
