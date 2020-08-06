import React, {useState} from 'react';
import axios from 'axios';



const GetSoftSkills = (codeRome) =>{
   
    const [softSkills,setSoftSkills] = useState({})

    let token = '97efb196-757d-417c-8585-9ac7c6c245d9';
   // let softSkills = {};

            let config = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://api.emploi-store.fr/partenaire/matchviasoftskills/v1/professions/job_skills?code='+codeRome,
        headers: { 
            'Authorization': 'Bearer '+token, 
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
        
        
        //console.log(softSkills);
        return(
            <div>
                <p>{Object.keys(softSkills)}</p>
            </div>
        )
    
}

export default GetSoftSkills ;