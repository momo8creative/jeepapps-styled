import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @media (min-width: ${v.laptopWidth}) {
    flex-direction: row;
  }
`;
