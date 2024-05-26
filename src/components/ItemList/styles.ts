 import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-between;

    text-align: center;
    align-items: center;

    padding: 15px;
    margin-bottom: 10px;


    border-radius: 4px;

    background-color: ${(props) => props.theme.colors['blue-700']};
    //background-color: red;

    h1{
        font-size: ${(props) => props.theme.fontSizes['text']};
    }

    .labelDate{
        color: ${(props) => props.theme.colors['gray-200']};
    }

    .labelHours{
        color: ${(props) => props.theme.colors['gray-100']};
        //fonte em negrito
    }
`;