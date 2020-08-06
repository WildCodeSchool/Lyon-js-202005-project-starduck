import React from 'react';
import axios from 'axios';



const GetSoftSkills = (codeRome) =>{
   

    

        let config = {
        method: 'post',
        url: 'https://api.emploi-store.fr/partenaire/matchviasoftskills/v1/professions/job_skills?code=A1201',
        headers: { 
            'Authorization': 'Bearer 23da94bd-77ae-4366-a0ab-80d98033c076', 
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
console.log (GetSoftSkills());

export default GetSoftSkills ;