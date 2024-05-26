import { Container } from './styles';

interface Props {
    date: string;
    hours: string
}

export const ItemList = ({ date, hours }: Props) => {
    return (
        <Container>
            <h1 className='labelDate'>{date}</h1>
            <h1 className='labelHours'>{hours}</h1>
        </Container>
    );
};
