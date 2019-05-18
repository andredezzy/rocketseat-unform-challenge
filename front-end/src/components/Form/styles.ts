import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 15px;
    width: 350px;
    color: #707070;
    padding: 40px 50px;

    form {
        label {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 20px;
            margin-left: 10px;
        }

        input {
            display: block;
            border: none;
            background-color: #e5efff;
            font-size: 17px;
            border-radius: 22px;
            padding: 12px 15px;
            color: #758cb1;
            font-weight: 500;
            width: calc(100% - 30px);

            &#name {
                margin-bottom: 20px;
            }

            &::placeholder {
                font-weight: 500;
                color: #c1d2ec;
            }
        }
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 50px;

    button {
        display: flex;
        align-items: center;

        border: none;
        padding: 10px 14px;
        border-radius: 15px;
        font-size: 15px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 600;

        background-color: #95c0ff;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            cursor: pointer;
            background-color: #7eb2ff;
        }

        #right-arrow-icon {
            margin-left: 10px;
        }
    }
`;
