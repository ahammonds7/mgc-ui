import { colors } from './config'
import styled from "@emotion/styled";

const StyledDiv = styled.div`
    font-size: 20px;
    padding: 15px 0;
    text-align: center;
    background-color: ${colors.primaryDark};
    color: ${colors.light};
    position: sticky;
    top: 0;
    z-index: 3;
`

function TempClosedBanner() {
  return (
    <StyledDiv>
      We are temporarily not accepting orders.
    </StyledDiv>
  );
}

export default TempClosedBanner;
