import { useRef, InputHTMLAttributes  } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export const Input = ({ title, ...rest }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <Container onClick={handleClick}>
            <h1>{title}</h1>
            <input ref={inputRef} {...rest}/>
        </Container>
    );
};
