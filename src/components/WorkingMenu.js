import styled from "styled-components";
import { Link } from 'react-router-dom';
import React from 'react';
import Connection from "./parentsComponents/Connection"

const Header = styled.header`
  grid-area: head;
  background-color: #ffff64;
`;

function WorkingMenu() {
  return(
      <div>
        <nav>
          <div>
            <span><Link to="/">Connection</Link></span>
            {/* <span><Link to="/sign-in">Sign In</Link></span>
            <span><Link to="/dashboard-coach">Dashboard Coach</Link></span>
            <span><Link to="/rome-research">Rome Research</Link></span>
            <span><Link to="/rome-vs-candidate">Rome Vs Candidate</Link></span>
            <span><Link to="/candidates-management">Candidates Management</Link></span>
            <span><Link to="/edit-profile">Edit Profile</Link></span>
            <span><Link to="/dashboard-candidate">Dashboard Candidate</Link></span>
            <span><Link to="/edit-soft-skills">Edit Soft skills</Link></span>
            <span><Link to="/candidate-soft-skills">Candidate Soft skills</Link></span> */}
          </div>
        </nav>

        {/* <Switch>
          <Route exact path="/" component={Connection}/>
            <Route path="/sign-in" component={SignIn}/>
          <Route path="/dashboard-coach" component={DashboardCoach}/>
          <Route path="/rome-research" component={RomeResearch}/>
          <Route path="/rome-vs-candidate" component={RomeVsCandidate}/>
          <Route path="/Candidates-management" component={CandidatesManagement}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/dashboard-candidate" component={DashboardCandidate}/>
          <Route path="/edit-soft-skills" component={EditSoftSkills}/>
          <Route path="/candidate-soft-skills" component={CandidateSoftSkills}/>
          </Switch> */}
      </div>
  )
}



export default WorkingMenu;
