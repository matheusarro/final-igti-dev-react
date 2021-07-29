import styled from "styled-components";
import { DisabledTextInput } from "../atoms";

interface iYearSelectorProps {
  year: number;
  clickHandler: (event: any) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Arrow = styled.span`
  cursor: pointer;
`;

const YearSelector = (props : iYearSelectorProps) => {
  
  return (
    <Container>
      <Arrow id={'-'} onClick={props.clickHandler}>&#10094;</Arrow>

      <DisabledTextInput value={props.year} disabled></DisabledTextInput>
      
      <Arrow id={'+'}onClick={props.clickHandler}>&#10095;</Arrow>
    </Container>
  );
};

export default YearSelector;