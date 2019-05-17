import React from "react";

import { Container } from "./styles";

import Separator from "../../Separator";

interface IProps {
    id: number;
    name: string;
    contact: string;
}

export default function Item(props: IProps) {
    return (
        <Container>
            <td>{props.id}</td>
            <Separator
                width={3}
                height={19}
                margin={{ top: 4, right: 7, left: -8 }}
            />
            <td>{props.name}</td>
            <Separator
                width={3}
                height={19}
                margin={{ top: 4, right: 7, left: 28 }}
            />
            <td>{props.contact}</td>
        </Container>
    );
}
