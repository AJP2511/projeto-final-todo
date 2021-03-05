import styled from "styled-components";

export const InputContainer = styled.div`
  height: 100%;
  flex-grow: 0.5;
  display: flex;
  align-items: center;

  @media screen and (max-width: 720px) {
    height: auto;
  }
`;

export const InnerContainer = styled.form`
  background-color: #7da0d4;
  margin: 10% auto;
  width: 90%;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 720px) {
    margin: 20px auto 0 auto;
  }
`;

export const TitleContainer = styled.div`
  padding: 0.5rem;
  font-size: 1.6rem;
`;

export const SubjectContainer = styled.input`
  margin: 1.5em 0;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 0.4s ease;
  outline: none;
  font-size: 1.125rem;
  &:focus {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const TodoContainer = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  border-radius: 10px;
  padding: 0.5rem;
  transition: all 0.4s ease;
  font-size: 1.125rem;

  &:focus {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const InputButton = styled.button`
  margin: 1.5rem 0;
  border: none;
  cursor: pointer;
  padding: 0.5rem 3rem;
  border-radius: 10px;
  transition: all 0.4s ease;
  font-size: 1.125rem;
  &:hover {
    transform: scale(1.2);
    background-color: #9147ff;
    color: #fafafa;
  }
`;
