import styled from "styled-components";
import React from "react";
import Connection from "../components/parentsComponents/Connection"
import { Switch, Route } from 'react-router-dom';

const MainWrapper = styled.body`
  grid-area: main;
  background-color: #8ca0ff;
`;

function Main() {
  return (
    <div className="App">
      <MainWrapper>
      <Main>
      <Switch>
          <Route exact path="/" component={Connection}/>
            {/* <Route path="/sign-in" component={SignIn}/>
          <Route path="/dashboard-coach" component={DashboardCoach}/>
          <Route path="/rome-research" component={RomeResearch}/>
          <Route path="/rome-vs-candidate" component={RomeVsCandidate}/>
          <Route path="/Candidates-management" component={CandidatesManagement}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/dashboard-candidate" component={DashboardCandidate}/>
          <Route path="/edit-soft-skills" component={EditSoftSkills}/>
          <Route path="/candidate-soft-skills" component={CandidateSoftSkills}/> */}
          </Switch>
      </Main>
      </MainWrapper>
    </div>
  );
}

export default Main;
