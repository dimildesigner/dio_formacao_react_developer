import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #655c57;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 40%;     
    background: linear-gradient(135deg, #212121, #414141);
    border-width: 2px;
    border-style: solid;
    border-color: #3eecfc8b;

    border-radius: 10px;
    padding: 20px;
    box-shadow: 12px 12px 30px #1e1e1ec8, -12px -12px 30px #454545cb;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`