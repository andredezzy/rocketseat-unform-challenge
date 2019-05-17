import React from "react";

import { Container } from "./styles";

export interface IProps {
    id?: string;
    color?: string;
    width?: number;
    height: number;
    rotate?: number;
    margin?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
}

export default function Separator(props: IProps) {
    return <Container className="separator" {...props} />;
}
