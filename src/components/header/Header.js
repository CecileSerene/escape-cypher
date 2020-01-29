import React from "react"

import Countdown from "../countdown/Countdown"
import { HeaderStyle } from "./Header.style"

const Header = () => (
    <HeaderStyle>
        <Countdown></Countdown>
    </HeaderStyle>
);

export default Header;