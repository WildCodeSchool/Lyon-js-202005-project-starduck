import React from 'react';
//import Axios from 'axios';



const GetSoftSkills = (codeRome) =>{
   // console.log (props);

       const axios = require('axios');

        let config = {
        method: 'post',
        url: 'https://api.emploi-store.fr/partenaire/matchviasoftskills/v1/professions/job_skills?code=A1201',
        headers: { 
            'Authorization': 'Bearer 9b441d12-83c2-412c-9f2d-d91eb59a8ca4', 
        }
        };

        axios(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });

        return(
            <div>
                <p>Test render API</p>
            </div>
        )
    
}


export default GetSoftSkills ;