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
  width: 1124px;
  margin-left: auto;
  margin-right: auto;
  background: aliceblue;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
          <Footer />
          <Bottom />
        </Container>
      </div>
    );
  }
}

export default App;
