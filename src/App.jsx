import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { MainContainer } from "./styles/App.styled";
import { Provider } from "react-redux";
import store from "./store/ConfigureStore";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <Content />
      </MainContainer>
    </Provider>
  );
};

export default App;
