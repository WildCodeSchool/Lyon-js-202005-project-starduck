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
        console.log(JSON.stringify(response.data));
            setSoftSkills(response.data);
        })
        .catch((error) => {
            console.log(error);

        });



        const softSkillsTest = 
{
    
        "soft_skill_12": {
            "score": 1,
            "summary": "Sens de la pédagogie",
            "details": "Exprimer avec clarté, expliquer et transmettre une information, une réglementation, une procédure ou un processus."
        },
        "soft_skill_11": {
            "score": 1,
            "summary": "Être rigoureux",
            "details": "Prêter attention aux détails, avoir le souci de la vérification et du contrôle en vue de réduire les incertitudes dans son action et dans son environnement."
        },
        "soft_skill_16": {
            "score": 1,
            "summary": "Sens des affaires et de la valeur de l’argent",
            "details": "Renvoie à la capacité d’empathie et d’analyse de l’environnement pour vendre et faire des affaires au mieux permis par les événements."
        },
        "soft_skill_09": {
            "score": 0.926516042330088,
            "summary": "Sens de l’organisation",
            "details": "Avoir une propension à agencer et structurer son environnement en vue d’optimiser le service rendu."
        },

    
}

        return(
            <div>
                {Object.keys(softSkillsTest).map((item) => {
                    return (
                        <div>
                            <h1> Code Rome A1201</h1>
                            <h2>{softSkillsTest[item].summary}</h2>
                            <p>{Math.round(softSkillsTest[item].score * 10000 )/100+ " %" 
                                }
                            </p>
                            <progress value={softSkillsTest[item].score*100} max="100"> {Math.round(softSkillsTest[item].score * 10000 )/100+ " %" 
                                } </progress>
                            <p>{softSkillsTest[item].details}</p>
                        </div>
                );
                })
                }
            </div>
        )
    

export default GetSoftSkills;