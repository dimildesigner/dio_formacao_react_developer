import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 25px;
    margin: 5px;
    
    border-radius: 10px;
    background-color: #1a1a1a;
    
    border: 2px solid #56edfb;
    box-shadow: 
        0 0 5px 1px #00ffff, inset 0 0 2px 1px #00ffff;
    transition: 0.3s;

    color: #02b1c5;
    text-shadow: 3px 3px 6px #08dfdf62;, -3px -3px 6px #5dffffb9;;
    font-famyle: "Roboto";    
    font-size: 20px;
    font-weight: 600;
    flex: 1;

    &:hover {        
        background-color: #080808;
        color: #1ce8ff;
        text-shadow: 3px 3px 6px #56edfbbf;

        box-shadow: 
        inset 0 0 5px 2px #00ffff,
        0 0 10px 4px #00ffff;
    }    
`