import styled from "styled-components";

export const PopContainer = styled.div`
  color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  z-index: 1000;

  @media screen and (max-width: 720px) {
    backdrop-filter: none;
  }
`;

export const PopInternal = styled.div`
  width: 50%;
  height: 50%;
  background-color: rgba(15, 48, 92, 0.9);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    background-color: rgba(15, 48, 92, 1);
  }

  h2,
  h4 {
    margin: 10px 0;
  }

  @media screen and (max-width: 720px) {
    width: 90%;
    height: 50%;
  }
`;

export const ButtonsContainer = styled.div`
  button {
    border: none;
    margin: 20px;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
