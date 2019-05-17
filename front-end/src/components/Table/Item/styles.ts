import styled from "styled-components";

export const Container = styled.tr`
    background-color: #f9f9f9;
    width: 100%;
    margin-top: 10px;

    &:hover {
        background-color: #f5f5f5;
    }

    td {
        margin: 0;

        &:first-child {
            padding-left: 10px;
            border-left-style: solid;
            border-left-color: transparent;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }

        &:last-child {
            padding-right: 500px;
            border-right-style: solid;
            border-right-color: transparent;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
        }
    }
`;
