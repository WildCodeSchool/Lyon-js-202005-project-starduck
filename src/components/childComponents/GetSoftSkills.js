import React, { useState } from 'react';
import axios from 'axios';



const GetSoftSkills = (props) => {

    const [softSkills, setSoftSkills] = useState({})

    let token = props.token;


    let config = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://api.emploi-store.fr/partenaire/matchviasoftskills/v1/professions/job_skills?code=' + props.codeRome,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    axios(config)
        .then((response) => {
            //console.log(JSON.stringify(response.data));
            setSoftSkills(response.data.skills);
        })
        .catch((error) => {
            console.log(error);

        });


    return (
        <div>
            <p>Test</p>
        </div>
    )

}

export default GetSoftSkills;