import React from 'react';
import './App.css';
import GridLayout from "./layout/GridLayout";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Nav from "./layout/Nav";
import Header from "./layout/Header";
import DisplayRadar from "./components/DisplayRadar";




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
    <DisplayRadar />
    </div>
  );
}

export default App;
