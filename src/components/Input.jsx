import React, { useState } from "react";
import {
  InputContainer,
  InnerContainer,
  TitleContainer,
  SubjectContainer,
  TodoContainer,
  InputButton,
} from "../styles/Input.styled";
import { addTask } from "../store/reducers/Todo.reducer";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ subject: subject, task: task }));
    setSubject("");
    setTask("");
  };

  return (
    <InputContainer>
      <InnerContainer onSubmit={handleSubmit}>
        <TitleContainer>New Task</TitleContainer>
        <SubjectContainer
          type="text"
          placeholder="subject"
          autoFocus
          value={subject}
          onChange={({ target }) => setSubject(target.value)}
        />
        <TodoContainer
          required
          rows="10"
          cols="30"
          placeholder="Write here what you wanna remember :)"
          value={task}
          onChange={({ target }) => setTask(target.value)}
          maxLength="30"
        />
        <InputButton>Save</InputButton>
      </InnerContainer>
    </InputContainer>
  );
};

export default Input;
