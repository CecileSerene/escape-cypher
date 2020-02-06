import styled from "styled-components";
import { COLORS } from "../../constants/color";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    padding: 0 40px 0 40px;
`;

export const Text = styled.p`
    width: auto;
    text-align: justify;
    margin-right: 50px;
`;

export const Image = styled.img`
    width: 300px;
`;

export const LockImage = styled.img`
    height: 250px;
`;

export const Color = styled.span`
    background-color: ${props => props.color};
`;

export const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    width: 400px;
`;
export const Table = styled.table`
    background-color: ${COLORS.backgroundColor};
    width: 180px;
    height: 180px;
    border-spacing: 0;
`;

export const Cell = styled.td`
    border: 1px solid ${COLORS.secondaryBackgroundColor};
    min-width: 30px;
    min-height: 30px;
    text-align: center;
`;

export const TitleCell = styled.td`
    border: 1px solid ${COLORS.secondaryBackgroundColor};
    min-width: 30px;
    min-height: 30px;
    text-align: center;
    background-color: ${props => props.color};
    font-weight: bold;
`;

export const AccentCell = styled.td`
    border: 1px solid ${COLORS.secondaryBackgroundColor};
    min-width: 30px;
    min-height: 30px;
    text-align: center;
    background-color: ${props => props.color};
`;


