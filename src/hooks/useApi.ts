import axios from 'axios'

const BASEAPI = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001';

const useApi = {
    login: async (code: string) => {
        try {
            const res = await axios.post(`${BASEAPI}/signin`, { code });
            return res.data;
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            return { error: 'Erro ao realizar login.' }
        }
    },
    startPoint: async (date: string, currentDate: string, user_id: number) => {
        try {
            const res = await axios.post(`${BASEAPI}/startPoint`, { date, currentDate, user_id });
            return res.data;
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            return { error: 'Erro ao realizar login.' }
        }
    },
    endPoint: async (date: string, end: string, user_id: number, hours: string) => {
        try {
            const res = await axios.post(`${BASEAPI}/endPoint`, { date, end, user_id, hours });
            return res.data;
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            return { error: 'Erro ao realizar login.' }
        }
    },
}

export default () => useApi
