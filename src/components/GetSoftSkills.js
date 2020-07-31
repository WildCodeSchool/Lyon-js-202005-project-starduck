import React from "react";

import secretData from "../data/secretData.json";

import DisplaySoftSkills from "./DisplaySoftSkills";

import axios from "axios";
import qs from "qs";




//#region GET ACCESS TOKEN

//getAccessToken();

function getAccessToken() {

  let data = qs.stringify({
    grant_type: "client_credentials",
    client_id: secretData.clientId,
    client_secret: secretData.clientSecret,
    scope: secretData.scope,
  });
  let config = {
    method: "post",
    url:
      "https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//#endregion

/*************************************************************************************** */

// Basic request
function getSoftSkills(codeRome, accessToken) {
  let data = qs.stringify({});
  let config = {
    method: "post",
    url:
      "https://api.emploi-store.fr/partenaire/matchviasoftskills/v1/professions/job_skills?code=" +
      codeRome,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + accessToken,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      return JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

/*************************************************************************************** */
//console.log(getSoftSkills(codeRome, accessToken));
//getAccessToken();



function GetSoftSkills(props) {
  //const [softSkills, setSoftSkills] = useState({});

  let data = qs.stringify({});
  let config = {
    method: "post",
    url:
      "https://api.emploi-store.fr/partenaire/matchviasoftskills/v1/professions/job_skills?code=" +
      props.codeRome,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + props.accessToken,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      props.setSoftSkills(response.data.skills);
     // console.log(response.data.skills);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
<DisplaySoftSkills softSkills={props.softSkills}/>
  );
}

export default GetSoftSkills;


