// .roboto-<uniquifier> {
//   font-family: "Roboto", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
//   font-variation-settings:
//     "wdth" 100;
// }

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    *, body{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: #22272e;
        color: #ffffff;
    }
        
`