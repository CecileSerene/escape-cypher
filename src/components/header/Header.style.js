import styled from "styled-components";
import { COLORS } from "../../constants/color";

export const HeaderStyle = styled.div`
    height: 150px;
    background-color: ${COLORS.backgroundColor};
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0;
    position: fixed;
    width: 100%;
`;