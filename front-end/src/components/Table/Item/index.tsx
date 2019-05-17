import React from "react";

import { Container } from "./styles";

import Separator from "../../Separator";

interface IProps {
    name: string;
    contact: string;
}

export default function Item(props: IProps) {
    return (
        <Container>
            <td>{props.name}</td>
            <Separator
                width={3}
                height={19}
                margin={{ top: 4, right: 7, left: 78 }}
            />
            <td>{props.contact}</td>
        </Container>
    );
}
