import styled from "styled-components";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import WorkingMenu from "../components/WorkingMenu";

const HeaderWrapper = styled.header`
  grid-area: head;
  // background-color: #ffff64;
`;

function Header(props) {
  return(
    <HeaderWrapper>
      <WorkingMenu token={props.token} setToken={props.setToken}/>
    </HeaderWrapper>
  )
}

export default Header;
