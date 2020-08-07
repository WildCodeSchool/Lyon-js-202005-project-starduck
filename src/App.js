import React, {useState} from 'react';
import './App.css';
import GridLayout from "./layout/GridLayout";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Nav from "./layout/Nav";
import Header from "./layout/Header";






function App() {
  const [token, setToken] = useState("Insérer le token");

  return (
      <GridLayout>
        <Header token={token} setToken={setToken}/>
        <Nav />
        <Main token={token}>
        </Main>
        <Footer />
      </GridLayout>
  );
}

export default App;
