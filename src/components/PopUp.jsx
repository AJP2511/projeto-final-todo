import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PopContainer,
  PopInternal,
  ButtonsContainer,
} from "../styles/PopUp.styled";
import { closePopUp } from "../store/reducers/PopUp.reducer";
import {
  deleteConfirmed,
  deleteDenied,
} from "../store/reducers/ConfirmDelete.reducer";

const PopUp = () => {
  const popUp = useSelector((state) => state.popUp);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const t1 = e.target;
    const t2 = e.currentTarget;

    if (t1 === t2) {
      dispatch(closePopUp());
    }
  };

  const handleDelete = () => {
    dispatch(closePopUp());
    dispatch(deleteConfirmed());
  };
  return (
    <PopContainer onClick={handleClick}>
      <PopInternal>
        <h2>Are you sure about that?!</h2>
        <h4>this action is irreversible</h4>
        <ButtonsContainer>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => dispatch(closePopUp())}>No</button>
        </ButtonsContainer>
      </PopInternal>
    </PopContainer>
  );
};

export default PopUp;
