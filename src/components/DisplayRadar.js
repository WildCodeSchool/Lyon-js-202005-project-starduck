import React from "react";
import { Radar } from "@nivo/radar";


const data = {
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
  "soft_skill_01": {
      "score": 0.8440825449124312,
      "summary": "Être autonome",
      "details": "Exercer ses activités sans constante supervision, s’organiser en prenant des initiatives dans un cadre de responsabilité défini."
  },
  "soft_skill_13": {
      "score": 0.5,
      "summary": "Être à l’écoute",
      "details": "Être réceptif et attentif aux messages et sollicitations de ses interlocuteurs et de son environnement."
  },
  "soft_skill_14": {
      "score": 0.4593889287996499,
      "summary": "Avoir l’esprit d’équipe",
      "details": "Coopérer avec autrui et contribuer, au sein d’une équipe ou d’un projet, à l’atteinte d’un objectif commun."
  },
  "soft_skill_07": {
      "score": 0.44263512238753683,
      "summary": "Sens des responsabilités",
      "details": "S’engager, avec discernement, dans une action relevant de ses attributions et assumer ses choix."
  },
  "soft_skill_23": {
      "score": 0.4297421985997098,
      "summary": "Sens de l’initiative",
      "details": "Prendre spontanément, dans son champ de responsabilité, les dispositions susceptibles d’optimiser son action."
  },
  "soft_skill_20": {
      "score": 0.34231282151370274,
      "summary": "Sens de l’analyse",
      "details": "Examiner, décomposer et comparer les éléments constitutifs d’une situation, d’une procédure, d’un document ou d’un processus en vue de définir les rapports de causalité et établir un diagnostic."
  },
  "soft_skill_06": {
      "score": 0.34035026488814724,
      "summary": "Faire preuve d’autorité",
      "details": "Faire accepter son autorité légitime en s’affirmant et en assumant ses responsabilités dans le respect d’autrui."
  },
  "soft_skill_04": {
      "score": 0.31547207711099284,
      "summary": "Curiosité intellectuelle",
      "details": "Être ouvert à la nouveauté, avoir le goût d’apprendre."
  },
  "soft_skill_22": {
      "score": 0.29874364620477556,
      "summary": "Sens critique",
      "details": "S’interroger, porter un jugement constructif, avancer une contreproposition argumentée sur un fait, une situation, une proposition ou une idée."
  },
  "soft_skill_21": {
      "score": 0.2918185221564743,
      "summary": "Esprit de synthèse",
      "details": "Réunir, faire émerger et mettre en cohérence les informations essentielles concernant une situation, un document, une procédure ou un processus."
  },
  "soft_skill_02": {
      "score": 0.2634050914210333,
      "summary": "Sens de l’innovation/créativité",
      "details": "Raisonner différemment, rechercher, imaginer, définir, mettre en œuvre des pratiques, des solutions nouvelles, tout en respectant les procédures en vigueur et l’environnement de travail."
  },
  "soft_skill_05": {
      "score": 0.26310638403032727,
      "summary": "Etre persévérant",
      "details": "Faire preuve de ténacité, surmonter les obstacles en vue d’atteindre un objectif défini."
  },
  "soft_skill_03": {
      "score": 0.2023005716101277,
      "summary": "Capacité d’adaptation",
      "details": "Faire face à la nouveauté et au changement, ajuster sa posture en fonction de l’environnement, de la situation et de l’interlocuteur."
  },
  "soft_skill_15": {
      "score": 0.18309275943248698,
      "summary": "Sens des relations humaines",
      "details": "S’intéresser à autrui et établir aisément avec ses interlocuteurs, une relation propice aux échanges et à la communication."
  },
  "soft_skill_19": {
      "score": 0,
      "summary": "Réactivité",
      "details": "Répondre rapidement et de manière appropriée aux sollicitations, en particulier dans les situations d’urgence."
  },
  "soft_skill_18": {
      "score": 0,
      "summary": "Faire preuve de diplomatie",
      "details": "Être pondéré, nuancé, faire preuve de tact et d’habileté dans sa relation avec autrui."
  },
  "soft_skill_17": {
      "score": 0,
      "summary": "Faire preuve de discrétion",
      "details": "Faire preuve de retenue dans la divulgation d’informations et être capable d’en respecter la confi dentialité."
  },
  "soft_skill_10": {
      "score": 0,
      "summary": "Orientation clients",
      "details": "Renvoie à la capacité de focaliser tous les efforts nécessaires pour comprendre les besoins des clients internes et externes et y répondre, dans un souci de meilleur service rendu."
  },
  "soft_skill_08": {
      "score": 0,
      "summary": "Maîtrise de soi",
      "details": "Contrôler ses émotions, conserver son sang-froid en toute circonstance, en particulier dans les situations d’urgence et de forte tension."
  }
}

let softSkills = Object.keys(data).map(key => {
  return data[key];
});

  
const DisplayRadar = () => (
  <div className="radar">
    <h3>Representation graphique des Soft Skills</h3>
    <Radar
      width={600}
      height={600}
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      data={softSkills}
      indexBy="summary"
      keys={["score", "details"]}
      maxValue={1}
      colors={["#ddcb38", "#2b70e2"]}
      dotSize={60}
      dotColor="aqua"
      dotBorderWidth={7}
      borderColor="LawnGreen"
      gridLevels={6}
      gridLabelOffset = {5}
      enableDotLabel={true}
      legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
               
            }
      ]}
    />
  </div>
);

export default DisplayRadar;