import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Input } from '../../components/Input/intex';
import { Container, Content, TopContent } from './styles';
import { Button } from '../../components/Button/intex';




export const Home = () => {
    const navigate = useNavigate();

    const [codUser, setCodUser] = useState('4SXXFMf')

    const handleNavigation = () => {
        if (codUser) {
            navigate(`/pointRegister/${codUser}`)
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Preencha o código solicitado.",
                showConfirmButton: false,
                timer: 1800
            });
        }
    }

    return (
        <Container>
            <Content>
                <TopContent>
                    <h1>Ponto</h1>
                    <h1 className='negrito'>Ilumeo</h1>
                </TopContent>

                <Input
                    title='Código do usuário'
                    value={codUser}
                    onChange={e => setCodUser(e.target.value)}
                />

                {/* Botao */}
                <Button
                    title='Confirmar'
                    onClick={handleNavigation}
                />
            </Content>
        </Container>
    )
}