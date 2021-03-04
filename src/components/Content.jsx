import React from "react";
import Input from "./Input";
import { ContentContainer } from "../styles/Content.styled";
import Output from "./Output";

const Content = () => {
  return (
    <ContentContainer>
      <Input />
      <Output />
    </ContentContainer>
  );
};

export default Content;
