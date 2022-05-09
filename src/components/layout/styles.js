import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  @media (max-width: ${v.smWith}) {
    flex-direction: column;
  }
`;
