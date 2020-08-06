import styled from "styled-components";
import React from "react";
import Connection from "../components/parentsComponents/Connection"
import DashboardCoach from "../components/parentsComponents/DashboardCoach"
import GetSoftSkills from "../components/childComponents/GetSoftSkills"
import { Switch, Route } from 'react-router-dom';
import SelectCodeRome from "../components/childComponents/SelectCodeRome";

const MainWrapper = styled.body`
  grid-area: main;
  background-color: #8ca0ff;
`;

function Main() {
  return (
    <div className="App">
      
      <MainWrapper>

       <Switch>
          <Route exact path="/" component={Connection}/>
          <Route path="/dashboard-coach" component={DashboardCoach}/>
          <Route path="/rome-research" ><div><SelectCodeRome/></div><div><GetSoftSkills codeRome = {"A1201"}/></div></Route>
          {/* <Route path="/sign-in" component={SignIn}/>
          <Route path="/rome-vs-candidate" component={RomeVsCandidate}/>
          <Route path="/Candidates-management" component={CandidatesManagement}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/dashboard-candidate" component={DashboardCandidate}/>
          <Route path="/edit-soft-skills" component={EditSoftSkills}/>
          <Route path="/candidate-soft-skills" component={CandidateSoftSkills}/> */} */}
          </Switch>
      </MainWrapper>
    </div>
  );
}

export default Main;
