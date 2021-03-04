import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  height: calc(100vh - 100px);

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
