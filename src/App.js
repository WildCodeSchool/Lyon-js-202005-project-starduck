import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from "./layout/gridLayout";
import Footer from "./layout/footer";
import Main from "./layout/main";
import Nav from "./layout/nav";
import Header from "./layout/header";


function App() {
  return (
    <div className="App">
      <GridLayout>
      <Header />
      <Nav />
      <Main>
      </Main>
      <Footer />
    </GridLayout>
    </div>
  );
}

export default App;
