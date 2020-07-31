import React, { useState } from "react";
import GetSoftSkills from "./GetSoftSkills";
import DisplaySoftSkills from "./DisplaySoftSkills";
import codesRome from "../data/codesRome.json";

import MyResponsiveRadar from "./MyResponsiveRadar";

import axios from "axios";
import qs from "qs";


// data en dur :
let candidates = [
  { id: 0, name: "", candidateSoftSkills: {} },
  {
    id: 1,
    name: "nomCandidat testC1302",
    candidateSoftSkills: {
      soft_skill_01: {
        score: 0.562742839998118,
        summary: "Être autonome",
        details:
          "Exercer ses activités sans constante supervision, …itiatives dans un cadre de responsabilité défini.",
      },
      soft_skill_02: {
        score: 0.05388122495849733,
        summary: "Sens de l’innovation/créativité",
        details:
          "Raisonner différemment, rechercher, imaginer, défi…cédures en vigueur et l’environnement de travail.",
      },
      soft_skill_03: {
        score: 0.4644038244621553,
        summary: "Capacité d’adaptation",
        details:
          "Faire face à la nouveauté et au changement, ajuste…ronnement, de la situation et de l’interlocuteur.",
      },
      soft_skill_04: {
        score: 0.5986192135098248,
        summary: "Curiosité intellectuelle",
        details: "Être ouvert à la nouveauté, avoir le goût d’apprendre.",
      },
      soft_skill_05: {
        score: 0.5662868093233353,
        summary: "Etre persévérant",
        details:
          "Faire preuve de ténacité, surmonter les obstacles en vue d’atteindre un objectif défini.",
      },
      soft_skill_06: {
        score: 0.5941523946259771,
        summary: "Faire preuve d’autorité",
        details:
          "Faire accepter son autorité légitime en s’affirman…ant ses responsabilités dans le respect d’autrui.",
      },
      soft_skill_07: {
        score: 0.5900171169658192,
        summary: "Sens des responsabilités",
        details:
          "S’engager, avec discernement, dans une action relevant de ses attributions et assumer ses choix.",
      },
      soft_skill_08: {
        score: 0.5541078866512502,
        summary: "Maîtrise de soi",
        details:
          "Contrôler ses émotions, conserver son sang-froid e…ans les situations d’urgence et de forte tension.",
      },
      soft_skill_09: {
        score: 0.5489333915372243,
        summary: "Sens de l’organisation",
        details:
          "Avoir une propension à agencer et structurer son environnement en vue d’optimiser le service rendu.",
      },
      soft_skill_10: {
        score: 0.3185716691798684,
        summary: "Orientation clients",
        details:
          "Renvoie à la capacité de focaliser tous les effort…épondre, dans un souci de meilleur service rendu.",
      },
      soft_skill_11: {
        score: 0.5396512150209102,
        summary: "Être rigoureux",
        details:
          "Prêter attention aux détails, avoir le souci de la…itudes dans son action et dans son environnement.",
      },
      soft_skill_12: {
        score: 0.1880929932391852,
        summary: "Sens de la pédagogie",
        details:
          "Exprimer avec clarté, expliquer et transmettre une…ne réglementation, une procédure ou un processus.",
      },
      soft_skill_13: {
        score: 0.5180795160814047,
        summary: "Être à l’écoute",
        details:
          "Être réceptif et attentif aux messages et sollicit…ns de ses interlocuteurs et de son environnement.",
      },
      soft_skill_14: {
        score: 0.550541616474529,
        summary: "Avoir l’esprit d’équipe",
        details:
          "Coopérer avec autrui et contribuer, au sein d’une …u d’un projet, à l’atteinte d’un objectif commun.",
      },
      soft_skill_15: {
        score: 0.49990827387109166,
        summary: "Sens des relations humaines",
        details:
          "S’intéresser à autrui et établir aisément avec ses…ation propice aux échanges et à la communication.",
      },
      soft_skill_16: {
        score: 0.5802668790192462,
        summary: "Sens des affaires et de la valeur de l’argent",
        details:
          "Renvoie à la capacité d’empathie et d’analyse de l… des affaires au mieux permis par les événements.",
      },
      soft_skill_17: {
        score: 0.6352608409573339,
        summary: "Faire preuve de discrétion",
        details:
          "Faire preuve de retenue dans la divulgation d’info… être capable d’en respecter la confidentialité.",
      },
      soft_skill_18: {
        score: 0.15129352650464703,
        summary: "Faire preuve de diplomatie",
        details:
          "Être pondéré, nuancé, faire preuve de tact et d’habileté dans sa relation avec autrui.",
      },
      soft_skill_19: {
        score: 0.39403619742692003,
        summary: "Réactivité",
        details:
          "Répondre rapidement et de manière appropriée aux s…ns, en particulier dans les situations d’urgence.",
      },
      soft_skill_20: {
        score: 0.5127476207926096,
        summary: "Sens de l’analyse",
        details:
          "Examiner, décomposer et comparer les éléments cons…s rapports de causalité et établir un diagnostic.",
      },
      soft_skill_21: {
        score: 0.5962210525329295,
        summary: "Esprit de synthèse",
        details:
          "Réunir, faire émerger et mettre en cohérence les i…tion, un document, une procédure ou un processus.",
      },
      soft_skill_22: {
        score: 0.5353841218644017,
        summary: "Sens critique",
        details:
          "S’interroger, porter un jugement constructif, avan…fait, une situation, une proposition ou une idée.",
      },
      soft_skill_23: {
        score: 0.5705503494707788,
        summary: "Sens de l’initiative",
        details:
          "Prendre spontanément, dans son champ de responsabi…dispositions susceptibles d’optimiser son action.",
      },
    },
  },
  {
    id: 2,
    name: "Jean-Michel Candidat",
    candidateSoftSkills: {
      soft_skill_01: {
        score: 0.462742839998118,
        summary: "Être autonome",
        details:
          "Exercer ses activités sans constante supervision, …itiatives dans un cadre de responsabilité défini.",
      },
      soft_skill_02: {
        score: 0.09388122495849733,
        summary: "Sens de l’innovation/créativité",
        details:
          "Raisonner différemment, rechercher, imaginer, défi…cédures en vigueur et l’environnement de travail.",
      },
      soft_skill_03: {
        score: 0.2644038244621553,
        summary: "Capacité d’adaptation",
        details:
          "Faire face à la nouveauté et au changement, ajuste…ronnement, de la situation et de l’interlocuteur.",
      },
      soft_skill_04: {
        score: 0.3986192135098248,
        summary: "Curiosité intellectuelle",
        details: "Être ouvert à la nouveauté, avoir le goût d’apprendre.",
      },
      soft_skill_05: {
        score: 0.7662868093233353,
        summary: "Etre persévérant",
        details:
          "Faire preuve de ténacité, surmonter les obstacles en vue d’atteindre un objectif défini.",
      },
      soft_skill_06: {
        score: 0.6941523946259771,
        summary: "Faire preuve d’autorité",
        details:
          "Faire accepter son autorité légitime en s’affirman…ant ses responsabilités dans le respect d’autrui.",
      },
      soft_skill_07: {
        score: 0.8900171169658192,
        summary: "Sens des responsabilités",
        details:
          "S’engager, avec discernement, dans une action relevant de ses attributions et assumer ses choix.",
      },
      soft_skill_08: {
        score: 0.3541078866512502,
        summary: "Maîtrise de soi",
        details:
          "Contrôler ses émotions, conserver son sang-froid e…ans les situations d’urgence et de forte tension.",
      },
      soft_skill_09: {
        score: 0.6489333915372243,
        summary: "Sens de l’organisation",
        details:
          "Avoir une propension à agencer et structurer son environnement en vue d’optimiser le service rendu.",
      },
      soft_skill_10: {
        score: 0.4185716691798684,
        summary: "Orientation clients",
        details:
          "Renvoie à la capacité de focaliser tous les effort…épondre, dans un souci de meilleur service rendu.",
      },
      soft_skill_11: {
        score: 0.3396512150209102,
        summary: "Être rigoureux",
        details:
          "Prêter attention aux détails, avoir le souci de la…itudes dans son action et dans son environnement.",
      },
      soft_skill_12: {
        score: 0.2880929932391852,
        summary: "Sens de la pédagogie",
        details:
          "Exprimer avec clarté, expliquer et transmettre une…ne réglementation, une procédure ou un processus.",
      },
      soft_skill_13: {
        score: 0.7180795160814047,
        summary: "Être à l’écoute",
        details:
          "Être réceptif et attentif aux messages et sollicit…ns de ses interlocuteurs et de son environnement.",
      },
      soft_skill_14: {
        score: 0.950541616474529,
        summary: "Avoir l’esprit d’équipe",
        details:
          "Coopérer avec autrui et contribuer, au sein d’une …u d’un projet, à l’atteinte d’un objectif commun.",
      },
      soft_skill_15: {
        score: 0.79990827387109166,
        summary: "Sens des relations humaines",
        details:
          "S’intéresser à autrui et établir aisément avec ses…ation propice aux échanges et à la communication.",
      },
      soft_skill_16: {
        score: 0.1802668790192462,
        summary: "Sens des affaires et de la valeur de l’argent",
        details:
          "Renvoie à la capacité d’empathie et d’analyse de l… des affaires au mieux permis par les événements.",
      },
      soft_skill_17: {
        score: 0.9352608409573339,
        summary: "Faire preuve de discrétion",
        details:
          "Faire preuve de retenue dans la divulgation d’info… être capable d’en respecter la confidentialité.",
      },
      soft_skill_18: {
        score: 0.19129352650464703,
        summary: "Faire preuve de diplomatie",
        details:
          "Être pondéré, nuancé, faire preuve de tact et d’habileté dans sa relation avec autrui.",
      },
      soft_skill_19: {
        score: 0.29403619742692003,
        summary: "Réactivité",
        details:
          "Répondre rapidement et de manière appropriée aux s…ns, en particulier dans les situations d’urgence.",
      },
      soft_skill_20: {
        score: 0.9127476207926096,
        summary: "Sens de l’analyse",
        details:
          "Examiner, décomposer et comparer les éléments cons…s rapports de causalité et établir un diagnostic.",
      },
      soft_skill_21: {
        score: 0.9810525329295,
        summary: "Esprit de synthèse",
        details:
          "Réunir, faire émerger et mettre en cohérence les i…tion, un document, une procédure ou un processus.",
      },
      soft_skill_22: {
        score: 0.5653841218644017,
        summary: "Sens critique",
        details:
          "S’interroger, porter un jugement constructif, avan…fait, une situation, une proposition ou une idée.",
      },
      soft_skill_23: {
        score: 0.3705503494707788,
        summary: "Sens de l’initiative",
        details:
          "Prendre spontanément, dans son champ de responsabi…dispositions susceptibles d’optimiser son action.",
      },
    },
  },
];

function SearchByCodeRome() {
  const [accessToken, setAccessToken] = useState("");

  const [level1, setLevel1] = useState("0");
  const [level2, setLevel2] = useState("0");
  const [level3, setLevel3] = useState("0");
  const [level4, setLevel4] = useState("0");
  const [level5, setLevel5] = useState("0");
  const [codeRome, setCodeRome] = useState("");

  const [indexCandidate, setIndexCandidate] = useState(0);
  const [softSkillsCodeRome, setSoftSkillsCodeRome] = useState({});

  const handleChangeAccessToken = (event) => {
    setAccessToken(event.target.value);
  };

  const handleChangeCodeRome = (event) => {
    if (event.target.value.length > 0) {
      setCodeRome(event.target.value);
    }
  };

  const handleChangeCandidate = (event) => {
    if (event.target.value.length > 0) {
      console.log("event.target.value: ", candidates[event.target.value]);

      setIndexCandidate([event.target.value]);

      console.log(indexCandidate);
    }
  };

  const handleChangeLevel1 = (event) => {
    if (event.target.value.length > 0) {
      setLevel1(event.target.value);
      setLevel2("0");
      setLevel3("0");
      setLevel4("0");
    }
  };

  const handleChangeLevel2 = (event) => {
    if (event.target.value.length > 0) {
      setLevel2(event.target.value);
      setLevel3("0");
      setLevel4("0");
    }
  };

  const handleChangeLevel3 = (event) => {
    if (event.target.value.length > 0) {
      setLevel3(event.target.value);
      setLevel4("0");
    }
  };

  const handleChangeLevel4 = (event) => {
    if (event.target.value.length > 0) {
      setLevel4(event.target.value);
      if (level1 !== "7" && level1 !== "13") setCodeRome(event.target.value);
    }
  };

  const handleChangeLevel5 = (event) => {
    if (event.target.value.length > 0) {
      setLevel5(event.target.value);
      if (level1 === "7" || level1 === "13") setCodeRome(event.target.value);
    }
  };

  const convertSoftSkillsToDataGraph = (
    key1,
    softSkills1,
    key2,
    softSkills2
  ) => {
    let result = [];
    let lstSoftSkills1 = Object.entries(softSkills1);
    let lstSoftSkills2 = Object.entries(softSkills2);

    for (
      let i = 0;
      i < Math.max(lstSoftSkills1.length, lstSoftSkills2.length);
      i++
    ) {
      let tempObj = {};
      
      
      
      if (lstSoftSkills1[i] !== undefined)
        tempObj[key1] = lstSoftSkills1[i][1].score;

      if (lstSoftSkills2[i] !== undefined)
        tempObj[key2] = lstSoftSkills2[i][1].score;

      tempObj.key = i;
      //console.log(tempObj.key);
      tempObj.details =
        lstSoftSkills1[i] === undefined
          ? lstSoftSkills2[i][0].details
          : lstSoftSkills1[i][0].details;
      tempObj.summary =
        lstSoftSkills1[i] === undefined
          ? lstSoftSkills2[i][1].summary
          : lstSoftSkills1[i][1].summary;

      // tempObj.key = lstSoftSkills1[i][0];
      // tempObj.details = lstSoftSkills1[i][1].details;
      // tempObj.summary = lstSoftSkills1[i][1].summary;

      result.push(tempObj);
    }

    return result;
  };

  const getSoftSkills = (codeRome, accessToken) => {
    //const [softSkills, setSoftSkills] = useState({});

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
        setSoftSkillsCodeRome(response.data.skills);
        // console.log(response.data.skills);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let dataRadar = [];

  // console.log(
  //   "candidates[indexCandidate].candidateSoftSkills: ",
  //   candidates[indexCandidate].candidateSoftSkills
  // );
  // console.log('softSkillsCodeRome: ', softSkillsCodeRome);

  dataRadar = convertSoftSkillsToDataGraph(
    "Soft skills du candidat " + candidates[indexCandidate].name,
    candidates[indexCandidate].candidateSoftSkills,
    "Soft Skills du code ROME " + codeRome,
    softSkillsCodeRome
  );
  //console.log(dataRadar);

  getSoftSkills(codeRome, accessToken);

  //  dataRadar = convertSoftSkillsToDataGraph(
  //   "Soft skills du candidat",
  //   candidates[0].candidateSoftSkills,
  //   "Soft Skills du code ROME I1203",
  //   softSkillsCodeRome
  // );

  return (
    <>
      <div>
        <div>
          <label htmlFor="accessToken">access token : </label>
          <input
            size="36"
            type="text"
            id="accessToken"
            onChange={handleChangeAccessToken}
            value={accessToken}
            placeholder="66a3b582-fabf-4786-abbc-33f3058e1bd7"
          ></input>
        </div>
        <label htmlFor="slctLevel1">Famille de métiers (14) : </label>
        <select id="slctLevel1" onChange={handleChangeLevel1} size="1">
          <option value=""></option>
          {codesRome.map((item, i) => (
            <option key={item.id} value={i}>
              {i} {item.id} {item.text}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="slctLevel2">Domaine professionnel (110) : </label>
        <select id="slctLevel2" onChange={handleChangeLevel2} size="1">
          <option value=""></option>
          {codesRome[parseInt(level1)].children.map((item, i) => (
            <option key={item.id} value={i}>
              {i} {item.id} {item.text}{" "}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="slctLevel3">
          {level1 === "7" || level1 === "13"
            ? "Sous-Domaine : "
            : "Fiche métier (code ROME) (532) : "}
        </label>
        <select id="slctLevel3" onChange={handleChangeLevel3} size="1">
          <option value=""></option>
          {codesRome[parseInt(level1)].children[parseInt(level2)].children.map(
            (item, i) => (
              <option key={item.id} value={i}>
                {i} {item.id} {item.text}{" "}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label htmlFor="slctLevel4">
          {level1 === "7" || level1 === "13"
            ? "Fiche métier (code ROME) (532) : "
            : "Intitulé (10 882) : "}
        </label>
        <select id="slctLevel4" onChange={handleChangeLevel4} size="1">
          <option value=""></option>
          {codesRome[parseInt(level1)].children[parseInt(level2)].children[
            parseInt(level3)
          ].children.map((item, i) => (
            <option key={item.id} value={item.rome}>
              {i} {item.id} {item.text} {item.rome} {item.parent}
            </option>
          ))}
        </select>
      </div>

      {level1 === "7" || level1 === "13" ? (
        <div>
          <label htmlFor="slctLevel5">Intitulé (10 882) : </label>
          <select id="slctLevel5" onChange={handleChangeLevel5} size="1">
            <option value=""></option>
            {codesRome[parseInt(level1)].children[parseInt(level2)].children[
              parseInt(level3)
            ].children[parseInt(level4)].children.map((item, i) => (
              <option key={item.id} value={item.rome}>
                {i} {item.id} {item.text} {item.rome} {item.parent}
              </option>
            ))}
          </select>
        </div>
      ) : (
        ""
      )}

      <div>
        <label htmlFor="slctCodeRome">Code Rome : </label>
        <input
          type="text"
          name="codeRome"
          id="slctCodeRome"
          onChange={handleChangeCodeRome}
          value={codeRome}
        />
        <label htmlFor="slctCandidate">Candidat : </label>

        <select id="slctCandidate" onChange={handleChangeCandidate} size="1">
          {candidates.map((item, i) => (
            <option key={item.id} value={i}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="graph">
        <MyResponsiveRadar
          key1={"Soft skills du candidat"}
          key2={"Soft Skills du code ROME I1203"}
          data={dataRadar}
        />{" "}
      </div> */}
      {/* <GetSoftSkills
        codeRome={codeRome}
        softSkills={softSkills}
        setSoftSkills={setSoftSkills}
        accessToken={accessToken}

      /> */}
      <div>
        {dataRadar.length > 0 ? (
          <div className="graph">
            <MyResponsiveRadar
              keys={[
                Object.keys(dataRadar[0])[0],
                Object.keys(dataRadar[0])[1],
              ]}
              data={dataRadar}
            />
          </div>
        ) : (
          <></>
        )}
      </div>

      <table>
        {/* <thead><tr><td>table header</td></tr></thead> */}
        <tbody>
          <tr>
            <td>
              {dataRadar.length > 0 ? (
                <div className="graph">
                  <MyResponsiveRadar
                    keys={[Object.keys(dataRadar[0])[0]]}
                    data={dataRadar}
                  />
                </div>
              ) : (
                <></>
              )}

              <DisplaySoftSkills
                name={
                  "Soft skills du candidat " + candidates[indexCandidate].name
                }
                softSkills={candidates[indexCandidate].candidateSoftSkills}
              />
              {/* <GetSoftSkills
              codeRome={codeRome}
              softSkills={softSkillsCandidate}
              setSoftSkills={setSoftSkillsCandidate}
              accessToken={accessToken}
            /> */}
            </td>
            <td>
              {dataRadar.length > 0 ? (
                <div className="graph">
                  <MyResponsiveRadar
                    keys={[Object.keys(dataRadar[0])[1]]}
                    data={dataRadar}
                  />
                </div>
              ) : (
                <></>
              )}

              <DisplaySoftSkills
                name={"Soft skills du code ROME " + codeRome}
                softSkills={softSkillsCodeRome}
              />

              {/* <GetSoftSkills
              codeRome={"I1203"}
              softSkills={softSkillsCodeRome}
              setSoftSkills={setSoftSkillsCodeRome}
            accessToken={accessToken} 
            />
            */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default SearchByCodeRome;
