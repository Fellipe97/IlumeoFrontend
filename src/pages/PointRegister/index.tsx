import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import moment from 'moment'
import 'moment/dist/locale/pt-br'

import { BoxButton, Container, HeaderContent, LeftHeader, ListPointsContent, RightHeader, SpinnerContent, TimerContent } from "./styles"
import { Button } from "../../components/Button/intex"
import { ItemList } from "../../components/ItemList/intex"
import useApi from '../../hooks/useApi';
import { UserInterface } from "../../dtos/UserInterface"
import { PointSystemInterface } from "../../dtos/PointSystemInterface"
import { Spinner } from "../../components/Spinner/indes"



export const PointRegister = () => {
    const { code } = useParams()
    const api = useApi();
    const navigate = useNavigate();

    const [user, setUser] = useState<UserInterface | null>()
    const [pointSystem, setPointSystem] = useState<PointSystemInterface[] | null>()

    const [startTimer, setStartTimer] = useState('')
    const [endTimer, setEndTimer] = useState('')
    const [labelPoint, setLabelPoint] = useState('0h 00m')

    const [loading, setLoading] = useState(false)


    //recuperar os pontos registrados no banco de dados
    useEffect(() => {
        if (code) {
            searchUser(code)
        } else {
            alert('Não foi possível localizar o usuário')
            navigate('/')
        }
    }, [])

    //contagem das horas e mintos apartir da hora de inicio
    useEffect(() => {
        if (startTimer && code && !endTimer) {
            const updateLabelPoint = () => {
                const now = moment();
                const duration = moment.duration(now.diff(moment(startTimer)));
                const minutes = duration.asMinutes().toFixed(0);
                const hours = Math.floor(parseInt(minutes) / 60);
                const mins = parseInt(minutes) % 60;
                setLabelPoint(`${hours}h ${mins.toString().padStart(2, '0')}m`);
            };
            updateLabelPoint();
            const interval = setInterval(updateLabelPoint, 60000);
            return () => clearInterval(interval);
        }
    }, [startTimer]);


    const searchUser = async (code: string) => {
        try {
            const res = await api.login(code);
            if (res.error) {
                alert(res.error)
                navigate('/')
            } else {
                if (res.points.length > 0) {
                    const date = moment().format('L');
                    const pointToday = res.points.filter((point: PointSystemInterface) => point.date === date);

                    //tem o ponto de inicio e o fim
                    if (pointToday[0].begin && pointToday[0].end) {
                        setEndTimer(pointToday[0].end)
                        setStartTimer(pointToday[0].begin)
                        setLabelPoint(pointToday[0].hours)
                    }
                    //só tem o ponto de inicio
                    else if (pointToday[0].begin) {
                        setStartTimer(pointToday[0].begin)
                    }
                }
                setUser(res.user)
                setPointSystem(res.points)
            }
        } catch (error) {
            alert('Ocorreu uma falha na aplicação, tente novamente.')
            navigate('/')
        }
    }


    const startPoint = async () => {
        try {
            setLoading(true)
            const date = moment().format('L');
            const currentDate = moment().format();
            const res = await api.startPoint(date, currentDate, user!.id);
            if (res.error) {
                alert(res.error)
                navigate('/')
            } else {
                alert(res.msg)
            }
        } catch (error) {
            alert('Ocorreu uma falha na aplicação, tente novamente.')
            navigate('/')
        } finally {
            setLoading(false)
        }
    }

    const endPoint = async () => {
        try {
            setLoading(true)
            const res = await api.endPoint(moment(startTimer).format('L'), moment().format(), user!.id, labelPoint);
            if (res.error) {
                alert(res.error)
                navigate('/')
            } else {
                alert(res.msg)
                searchUser(code!)
            }
        } catch (error) {
            alert('Erro ao se comunicar ao banco de dados, tente novamente.')
            navigate('/')
        } finally {
            setLoading(false)
        }
    }


    return (
        <Container>
            {!user &&
                <SpinnerContent>
                    <Spinner />
                </SpinnerContent>
            }
            {user &&
                <>
                    <HeaderContent>
                        <LeftHeader>
                            <h1 className="labelCodeUser">Relógio de ponto</h1>
                        </LeftHeader>

                        <RightHeader>
                            <h1 className="labelCodeUser">{user?.code}</h1>
                            <h1 className="labelTextUser">Usuário</h1>
                        </RightHeader>
                    </HeaderContent>

                    <TimerContent>
                        <h1 className="labelHour">{labelPoint}</h1>
                        <h1>Horas de hoje</h1>
                    </TimerContent>

                    <BoxButton>
                        {!startTimer &&
                            <Button
                                title="Hora de entrada"
                                loading={loading}
                                onClick={startPoint}
                            />
                        }
                        {startTimer &&
                            <Button
                                title="Hora de saída"
                                onClick={endPoint}
                                loading={loading}
                                disabled={endTimer ? true : false}
                            />
                        }
                    </BoxButton>

                    <ListPointsContent>
                        <h1>Dias anteriores</h1>

                        {(!pointSystem || pointSystem.length === 0 || (pointSystem.length === 1 && !pointSystem[0].end)) &&

                            <ItemList
                                date="Nenhum dia trabalhado"
                                hours="--h --m"
                            />
                        }

                        {pointSystem && pointSystem.length > 0 &&
                            pointSystem.map((item: PointSystemInterface) => {
                                if (item.hours) {
                                    return (
                                        <ItemList
                                            key={item.id}
                                            date={moment(item.begin).format('L')}
                                            hours={item.hours}
                                        />
                                    )
                                }
                            })
                        }
                    </ListPointsContent>
                </>
            }
        </Container>
    )

}