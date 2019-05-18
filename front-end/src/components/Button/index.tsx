import React from "react";

import { Container } from "./styles";

import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import RightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

export interface IProps {
    href?: string;
    text: string;
    color: string;
    hoverColor?: string;
    left?: boolean;
    right?: boolean;
}

export default function Button(props: IProps) {
    return (
        <Container className="button" {...props}>
            {props.left && (
                <img
                    id="left-arrow-icon"
                    src={LeftArrowIcon}
                    alt="left-arrow-icon"
                />
            )}
            <span>{props.text}</span>
            {props.right && (
                <img
                    id="right-arrow-icon"
                    src={RightArrowIcon}
                    alt="right-arrow-icon"
                />
            )}
        </Container>
    );
}
