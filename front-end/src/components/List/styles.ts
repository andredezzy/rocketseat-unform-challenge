import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 15px;
    width: 1000px;
    margin-top: 50px;
    color: #707070;
    max-height: 200px;
    border: 20px solid #fff;
    border-right-width: 10px;

    @media screen and (min-height: 900px) {
        max-height: 500px;
    }

    #head {
        padding-right: 1000px;
        text-transform: uppercase;
        margin-right: 10px;

        th:first-child {
            padding-left: 10px;
        }
    }

    #body {
        margin-right: 10px;
        font-weight: 500;
        margin-top: 7px;
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 3px solid #fff;
    }

    &::-webkit-scrollbar-track {
        background: #e5e5e5;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
    }
`;
