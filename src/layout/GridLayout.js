import styled from "styled-components";

const GridLayout = styled.div`
  width: 100%;
  height: 250px;
  display: grid;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
`;

export default GridLayout;
