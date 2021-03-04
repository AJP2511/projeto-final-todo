import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OutputContainer,
  OutputTaskContainer,
  InternalTaskContainer,
  ButtonsTaskContainer,
  ButtonTask,
} from "../styles/Output.styled";
import { removeTask, completeTask } from "../store/reducers/Todo.reducer";
import PopUp from "./PopUp";
import { openPopUp } from "../store/reducers/PopUp.reducer";
import { deleteDenied } from "../store/reducers/ConfirmDelete.reducer";

const Output = () => {
  const { todo, popUp, confirmDelete } = useSelector((state) => state);
  const [idToDelete, setIdToDelete] = useState(null);

  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    setIdToDelete(target.id);
    dispatch(openPopUp());
  };

  if (confirmDelete) {
    dispatch(removeTask(idToDelete));
    dispatch(deleteDenied());
  }

  const handleComplete = (e) => {
    dispatch(completeTask(e.target.id));
  };

  return (
    <OutputContainer>
      {popUp && <PopUp />}
      {todo &&
        todo.map((task, index) => (
          <OutputTaskContainer key={index}>
            <InternalTaskContainer>
              <p>
                <span>Subject:</span> {task.subject}
              </p>
              <p>
                <span>Task:</span> {task.task}
              </p>
            </InternalTaskContainer>
            <ButtonsTaskContainer>
              <ButtonTask id={index} bg="#c01fbb" onClick={handleClick}>
                Del
              </ButtonTask>
              <ButtonTask
                id={index}
                bg={task.complete ? "#9AF241" : "#BF4E63"}
                onClick={handleComplete}
              >
                {task.complete ? "Ok!" : "Ok?"}
              </ButtonTask>
            </ButtonsTaskContainer>
          </OutputTaskContainer>
        ))}
    </OutputContainer>
  );
};

export default Output;
