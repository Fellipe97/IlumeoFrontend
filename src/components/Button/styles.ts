import styled, { keyframes } from 'styled-components';


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


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Spinner = styled.div`
    border: 6px solid ${(props) => props.theme.colors['gray-200']}; /* Light grey */
    border-top: 6px solid ${(props) => props.theme.colors['blue-700']}; /* Blue */
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: ${rotate} 2s linear infinite; 
`;