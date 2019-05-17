import React from "react";

import { Container } from "./styles";

interface IProps {
    href: string;
    id?: string;
    label?: string;
    img?: string;
}

export default function Link(props: IProps) {
    return (
        <Container href={props.href} target="_blank" rel="noopener noreferrer">
            {props.label}
            {props.img && (
                <img id={props.id} src={props.img} alt="link-component" />
            )}
        </Container>
    );
}
