import styled from "styled-components";

import { IProps } from "./";

export const Container = styled.a<IProps>`
    display: flex;
    align-items: center;
    margin-right: 10px;

    background-color: ${props => props.color};
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    padding: 10px 14px;
    border-radius: 15px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${props =>
            props.hoverColor ? props.hoverColor : props.color};
    }

    #left-arrow-icon {
        margin-right: 10px;
    }

    #right-arrow-icon {
        margin-left: 10px;
    }
`;
