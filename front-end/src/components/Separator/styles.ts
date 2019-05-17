import styled from "styled-components";

import { IProps } from "./";

export const Container = styled.div<IProps>`
    background-color: ${props => (props.color ? props.color : "#efefef")};
    width: ${props => (props.width ? props.width : "5") + "px"};
    height: ${props => props.height + "px"};
    border-radius: 10px;

    margin-top: ${props => (props.margin ? props.margin.top : "0") + "px"};
    margin-right: ${props => (props.margin ? props.margin.right : "0") + "px"};
    margin-bottom: ${props =>
        (props.margin ? props.margin.bottom : "0") + "px"};
    margin-left: ${props => (props.margin ? props.margin.left : "0") + "px"};

    transform: rotate(${props => (props.rotate ? props.rotate : "0") + "deg"});
`;
