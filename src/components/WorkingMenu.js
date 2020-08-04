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
             {/* <span><Link to="/sign-in">Sign In</Link></span> */}
             <span><Link to="/dashboard-coach">Dashboard Coach</Link></span>
            {/*
            <span><Link to="/rome-research">Rome Research</Link></span>
            <span><Link to="/rome-vs-candidate">Rome Vs Candidate</Link></span>
            <span><Link to="/candidates-management">Candidates Management</Link></span>
            <span><Link to="/edit-profile">Edit Profile</Link></span>
            <span><Link to="/dashboard-candidate">Dashboard Candidate</Link></span>
            <span><Link to="/edit-soft-skills">Edit Soft skills</Link></span>
            <span><Link to="/candidate-soft-skills">Candidate Soft skills</Link></span> */}
          </div>
        </nav>
      </div>
  )
}



export default WorkingMenu;
