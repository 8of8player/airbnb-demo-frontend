import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./Header/";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import Bottom from "./Bottom";

const Container = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  background: white;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 992px) {
    width: 992px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Explore />
          <Experiences />
        </Container>
      </div>
    );
  }
}

export default App;
