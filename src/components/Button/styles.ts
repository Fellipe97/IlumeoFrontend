import styled from 'styled-components';


export const ButtonContainer = styled.button`
    border: 0px;
    background-color: ${(props) => props.theme.colors['orange-500']};
    color: ${(props) => props.theme.colors['blue-700']};
    padding: 15px;

    width: 100%;
    
    transition: .6s ease-in-out;
    &:hover{
        opacity: .5;
    }

    &:disabled{
        cursor: not-allowed;
        background-color: ${(props) => props.theme.colors['gray-200']};
        opacity: .7;
    };
`;