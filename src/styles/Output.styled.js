import styled from "styled-components";

export const OutputContainer = styled.div`
  flex-grow: 1;
  padding: 10% 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OutputTaskContainer = styled.div`
  display: flex;
  width: 90%;
  background-color: #fccf65;
  margin: 5px auto;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 720px) {
    background-color: rgb(255, 177, 59);
  }
`;

export const InternalTaskContainer = styled.div`
  flex-grow: 0.4;

  span {
    font-weight: 600;
  }
`;

export const ButtonsTaskContainer = styled.div`
  svg {
    margin: 5px;
    cursor: pointer;
  }
`;

export const ButtonTask = styled.button`
  border: none;
  margin: 0 5px;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.125rem;

  &:hover {
    transform: scale(1.2);
  }
`;
