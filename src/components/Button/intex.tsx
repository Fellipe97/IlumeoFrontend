import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, Spinner, SpinnerContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    loading?: boolean;
    disabled?: boolean;
}

export const Button = ({ title, loading = false, disabled = false, ...rest }: ButtonProps) => {


    return (
        <ButtonContainer disabled={disabled || loading}  {...rest}>
            {loading &&
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            }
            {!loading &&
                title
            }
        </ButtonContainer>
    );
};
