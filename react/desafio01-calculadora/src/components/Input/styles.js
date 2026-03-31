import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: flex-end;    

    input {
        width: 100%;
        height: 100px;
        border-radius: 10px;
        background-color: #99ffff;
        border-width: 3px;
        border-style: solid;
        border-color: #3eecfc8b;
        
        box-shadow: 6px 6px 10px #97ffff44, -6px -6px 10px #97ffff51;
        transition: 0.3s;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 30px;
        margin: 8px 0 16px 0;
        
        color: #606060;
        font-family: 'Roboto';
        font-size: 40px;
        text-align: right;
        text-shadow: 3px 3px 4px #3eecfc8b, -3px -3px 4px #64f2ff9e;
    }
`