import styled from 'styled-components';


export const Container = styled.div`

    background-color: ${(props) => props.theme.colors['blue-700']};
    padding: 10px;

    border-radius: 4px;
    margin-bottom: 24px;

    cursor: text;

    h1{
        font-size: ${(props) => props.theme.fontSizes['text']};
    }

    input{
        border: none;
        outline: none;
        font-size:  ${(props) => props.theme.fontSizes['title']};
        background-color: ${(props) => props.theme.colors['blue-700']};
        margin-top: 4px;
    }
`;