import axios from 'axios';
import { iRoundInfo } from '../interfaces';

const api = axios.create({baseURL: 'http://localhost:3001'});

const apiGetYearInfo = async (year: number) : Promise<iRoundInfo[]> => {
  try {
    const results = await api.get(`/${year}`);

    return results.data;
  } catch (error) {
    console.log(error || 'Ocorreu um erro na captura de dados do campeonato.');
    return error;
  }
};

export default apiGetYearInfo;