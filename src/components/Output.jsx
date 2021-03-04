import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OutputContainer,
  OutputTaskContainer,
  InternalTaskContainer,
  ButtonsTaskContainer,
  ButtonTask,
} from "../styles/Output.styled";
import { removeTask } from "../store/reducers/Todo.reducer";
import PopUp from "./PopUp";
import { closePopUp, openPopUp } from "../store/reducers/PopUp.reducer";
import {
  deleteConfirmed,
  deleteDenied,
} from "../store/reducers/ConfirmDelete.reducer";

const Output = () => {
  const [taskComplete, setTaskComplete] = useState(false);
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

  const handleOk = () => {
    setTaskComplete(!taskComplete);
  };

  return (
    <OutputContainer>
      {popUp && <PopUp />}
      {todo &&
        todo.map((task, index) => (
          <OutputTaskContainer key={index} complete={taskComplete}>
            <InternalTaskContainer>
              <p>
                <span>Subject:</span> {task.subject}
              </p>
              <p>
                <span>Task:</span> {task.task}
              </p>
            </InternalTaskContainer>
            <ButtonsTaskContainer>
              <ButtonTask id={index} bg="#941D90" onClick={handleClick}>
                Del
              </ButtonTask>
              <ButtonTask
                id={index}
                bg={taskComplete ? "#F20544" : "#94DB28"}
                onClick={handleOk}
              >
                {taskComplete ? "No" : "Ok"}
              </ButtonTask>
            </ButtonsTaskContainer>
          </OutputTaskContainer>
        ))}
    </OutputContainer>
  );
};

export default Output;
