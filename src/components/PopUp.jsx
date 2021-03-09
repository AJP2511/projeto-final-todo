import React from "react";
import { useDispatch } from "react-redux";
import {
  PopContainer,
  PopInternal,
  ButtonsContainer,
  ButtonOption,
} from "../styles/PopUp.styled";
import { closePopUp } from "../store/reducers/PopUp.reducer";
import { deleteConfirmed } from "../store/reducers/ConfirmDelete.reducer";

const PopUp = () => {
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
          <ButtonOption onClick={handleDelete} colorBg="red" colorFont="black">
            Yes
          </ButtonOption>
          <ButtonOption onClick={() => dispatch(closePopUp())}>No</ButtonOption>
        </ButtonsContainer>
      </PopInternal>
    </PopContainer>
  );
};

export default PopUp;
