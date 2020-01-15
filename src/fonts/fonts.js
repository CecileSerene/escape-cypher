import { createGlobalStyle } from 'styled-components';

import digital7 from './digital-7.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'digital-7';
        src: url(${digital7}) format('woff');
        font-weight: 300,
    }
`;