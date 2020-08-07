import styled from "styled-components";
import React from "react";
import Connection from "../components/parentsComponents/Connection"
import DashboardCoach from "../components/parentsComponents/DashboardCoach"
import GetSoftSkills from "../components/childComponents/GetSoftSkills"
import { Switch, Route } from 'react-router-dom';
import SelectCodeRome from "../components/childComponents/SelectCodeRome";

const MainWrapper = styled.body`
  grid-area: main;
  // background-color: #8ca0ff;
`;

function Main(props) {
  console.log("token:", props.token);

  return (
    <div>
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Connection} />
          <Route path="/dashboard-coach" component={DashboardCoach} />
          <Route path="/rome-research" ><div><SelectCodeRome /></div><div><GetSoftSkills codeRome={"A1201"} token={props.token} /></div></Route>
          <Route path="/sign-in" />
          <Route path="/rome-vs-candidate" />
          <Route path="/Candidates-management" />
          <Route path="/edit-profile" />
          <Route path="/dashboard-candidate" />
          <Route path="/edit-soft-skills" />
          <Route path="/candidate-soft-skills" />
        </Switch>
      </MainWrapper>
    </div>
  );
}

export default Main;
