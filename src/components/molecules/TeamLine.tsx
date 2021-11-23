import styled from "styled-components";

interface iTeamLineProps {
  index: number,
  time: string,
  slug: string,
  pontos: number,
  vitorias: number,
  empates: number,
  derrotas: number,
  gols_marcados: number,
  gols_sofridos: number,
  saldo_gols: number,
};

const TeamLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TeamItem = styled.div`
  padding: 0rem 1rem;
  width: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const TeamImage = styled.div`
  padding: 0rem 1rem;
`;

const TeamName = styled(TeamItem)`
  min-width: 10rem;
  display: flex;
  justify-content: flex-start;
`;

const TeamLine = ( {index, slug, time, pontos, vitorias, empates, derrotas, gols_marcados, gols_sofridos, saldo_gols} : iTeamLineProps) => {
  return (
    <TeamLineContainer>
      <TeamItem>{index}</TeamItem>
      <TeamImage><img src={`./img/teams/${slug}.png`} alt={`${time}`} width={24} height={25}></img></TeamImage>
      <TeamName>{time}</TeamName>
      <TeamItem>{pontos}</TeamItem>
      <TeamItem>{vitorias}</TeamItem>
      <TeamItem>{empates}</TeamItem>
      <TeamItem>{derrotas}</TeamItem>
      <TeamItem>{gols_marcados}</TeamItem>
      <TeamItem>{gols_sofridos}</TeamItem>
      <TeamItem>{saldo_gols}</TeamItem>
    </TeamLineContainer>
  );
};

export default TeamLine;