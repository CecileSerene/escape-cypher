import styled from "styled-components";

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
    margin-right: 20px;
`;

export const Image = styled.img`
    width: 300px;
`;

export const LockImage = styled.img`
    height: 250px;
`;

export const Color = styled.span`
    color: ${props => props.color};
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
