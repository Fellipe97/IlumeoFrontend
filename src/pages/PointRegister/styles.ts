import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
`;

export const HeaderContent = styled.div`
    display: flex;

    width: 500px;

    justify-content: space-between;
    margin-top: 65px;

    margin-bottom: 25px;
`;

export const LeftHeader = styled.div`
    h1{
        font-size: ${(props) => props.theme.fontSizes['text']};
        color: ${(props) => props.theme.colors['gray-100']}; 
    }
`;

export const RightHeader = styled.div`
    background-color: aquq;

    h1{
        font-size: ${(props) => props.theme.fontSizes['text']};     
    }
    
    .labelTextUser{
        color: ${(props) => props.theme.colors['gray-100']};
        opacity: .3;        
    }
`;

export const TimerContent = styled.div`
    width: 510px;
    margin-bottom: 20px;

    h1{
        font-size: ${(props) => props.theme.fontSizes['text']};
    }

    .labelHour{
        font-size: ${(props) => props.theme.fontSizes['clock']};
    }
`;

export const BoxButton = styled.div`
    width: 500px;
    margin-bottom: 20px;
`;

export const ListPointsContent = styled.div`
    width: 500px;
    h1{
        color: ${(props) => props.theme.colors['gray-100']};
        font-size: ${(props) => props.theme.fontSizes['text']};
        margin-bottom: 10px;
    }
`;
