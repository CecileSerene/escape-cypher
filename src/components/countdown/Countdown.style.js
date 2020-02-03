import styled from "styled-components";
import { COLORS } from "../../constants/color";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
`;


export const Timer = styled.div`
    color: red;
    font-family: 'digital-7';
    font-size: 148px;
    align-self: center;
`;

export const Button = styled.button`
    color: ${COLORS.primaryAccent};
    font-size: 34px;
    background-color: ${COLORS.backgroundColor};
    border: none;
    align-self: center;
`;