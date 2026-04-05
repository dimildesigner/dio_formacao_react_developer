import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom:20px;
    }

    a.ver {
        font-size: 15px;
        color: #4493f890;
        text-decoration: none;
        margin-bottom: 20px;

        &: hover {
            color: #4493f8;
        }
    }
            
    a.remover {
        font-size: 15px;
        color: #e34c2690;
        text-decoration: none;
        margin-top: 20px;

        &: hover {
            color: #e34c26;
        }
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;    
    }
`