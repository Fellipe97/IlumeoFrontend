import { ButtonHTMLAttributes  } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
}

export const Button = ({ title, disabled=false, ...rest }: ButtonProps) => {

  
    return (
        <ButtonContainer disabled={disabled}  {...rest}>
            {title}
        </ButtonContainer>
    );
};
