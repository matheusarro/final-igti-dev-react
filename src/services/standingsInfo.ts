import slugify from "slugify";
import { apiGetYearInfo } from "../adapters";
import { iMatchInfo, iRoundInfo, iTeamResult } from "../interfaces";

const getStandingsInfo = async (year: number) : Promise<iTeamResult[]> => {
  try {
    const results : iRoundInfo[] = await apiGetYearInfo(year);  // pega as informações da API
    const lastRound : iRoundInfo[] = results.filter(round => round.numero === Math.max(...results.map(round => round.numero), 0));  // filtra a rodada cujo número é igual ao maior número encontrado
    const lastRoundInfo: iRoundInfo = lastRound[0];   // pega as informações da última rodada
    const roundMatches : iMatchInfo[] = lastRoundInfo.partidas;   // pega somente as partidas da última rodada

    const teamsScores : iTeamResult[] = collectTeamsData(roundMatches);   // pega as informações dos times com base na última rodada

    return teamsScores;

  } catch (error) {
    console.log(error || 'Erro ao chamar requisição de captura de dados.')
    return error;
  }
};

/** recebe os dados da última rodada e passsa por cada uma das partidas adicionando mandante e visitante na pontuação final  **/
const collectTeamsData = (roundMatches : iMatchInfo[]) : iTeamResult[] => {
  let teamsScores : iTeamResult[] = [];

  for (const match of roundMatches) {
    let homeTeam : iTeamResult = {
      time: match.mandante.toUpperCase(),
      slug: slugify(match.mandante, {replacement: '_', lower: true}),
      pontos: match.pontuacao_geral_mandante.total_pontos,
      vitorias: match.pontuacao_geral_mandante.total_vitorias,
      empates: match.pontuacao_geral_mandante.total_empates,
      derrotas: match.pontuacao_geral_mandante.total_derrotas,
      gols_marcados: match.pontuacao_geral_mandante.total_gols_marcados,
      gols_sofridos: match.pontuacao_geral_mandante.total_gols_sofridos,
      saldo_gols: (match.pontuacao_geral_mandante.total_gols_marcados - match.pontuacao_geral_mandante.total_gols_sofridos)
    };

    teamsScores.push(homeTeam);

    let awayTeam : iTeamResult = {
      time: match.visitante.toUpperCase(),
      slug: slugify(match.visitante, {replacement: '_', lower: true}),
      pontos: match.pontuacao_geral_visitante.total_pontos,
      vitorias: match.pontuacao_geral_visitante.total_vitorias,
      empates: match.pontuacao_geral_visitante.total_empates,
      derrotas: match.pontuacao_geral_visitante.total_derrotas,
      gols_marcados: match.pontuacao_geral_visitante.total_gols_marcados,
      gols_sofridos: match.pontuacao_geral_visitante.total_gols_sofridos,
      saldo_gols: (match.pontuacao_geral_visitante.total_gols_marcados - match.pontuacao_geral_visitante.total_gols_sofridos)
    };

    teamsScores.push(awayTeam);
  }

  teamsScores.sort( (a : iTeamResult, b : iTeamResult) => b.pontos - a.pontos || b.vitorias - a.vitorias);

  return teamsScores;
};


export default getStandingsInfo;