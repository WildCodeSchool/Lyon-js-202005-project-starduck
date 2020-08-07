import React, { useState } from "react";
import codesRomeTree from "../../data/codesRomeTree.json";

const SelectCodeRome = () => {

    const [idLevel1, setIdLevel1] = useState(-1);
    const [idLevel2, setIdLevel2] = useState(-1);
    const [idLevel3, setIdLevel3] = useState(-1);
    const [idLevel4, setIdLevel4] = useState(-1);

    const handleChangeLevel1 = (event) => { console.log(event.target.value); setIdLevel1(parseInt(event.target.value)); setIdLevel2(-1); setIdLevel3(-1); setIdLevel4(-1); };
    const handleChangeLevel2 = (event) => { console.log(event.target.value); setIdLevel2(parseInt(event.target.value)); setIdLevel3(-1); setIdLevel4(-1); };
    const handleChangeLevel3 = (event) => { console.log(event.target.value); setIdLevel3(parseInt(event.target.value)); setIdLevel4(-1); };
    const handleChangeLevel4 = (event) => { console.log(event.target.value); setIdLevel4(parseInt(event.target.value)); };

    console.log("idLevel1 : ", idLevel1, "/nidLevel2 : ", idLevel2, "/nidLevel3 :", idLevel3, "/nidLevel4 :", idLevel4);

    return (
        <div>
            <h1>Select Code ROME</h1>

            {/* Sélection de la famille de métier */}
            <div>
                <label htmlFor="idLevel1">Choisissez une famille de métier : </label>
                <select id="idLevel1" onChange={handleChangeLevel1}>
                    <option value={-1}></option>
                    {codesRomeTree.map((item, i) => {
                        return (<option key={item.id} value={i}>{item.text}</option>)
                    })}
                </select>
            </div>

            {/* Sélection du domaine professionnel */}
            <div>
                <label htmlFor="idLevel2">Choisissez un domaine professionnel : </label>
                <select id="idLevel2" onChange={handleChangeLevel2}>
                    <option value={-1}></option>
                    {idLevel1 !== -1 ? codesRomeTree[idLevel1].children.map((item, i) => {
                        return (<option key={item.id} value={i}>{item.text}</option>)
                    }) : ""}
                </select>
            </div>

            {/* Sélection de la fiche métier */}
            <div>
                <label htmlFor="idLevel3">Choisissez une fiche métier  : </label>
                <select id="idLevel3" onChange={handleChangeLevel3}>
                    <option value={-1}></option>
                    {idLevel1 !== -1 && idLevel2 !== -1 ? codesRomeTree[idLevel1].children[idLevel2].children
                        .map((item, i) => {
                            return (<option key={item.id} value={i}>{item.text} </option>)
                        }) : ""}
                </select>
            </div>

            {/* Sélection de l'intitulé de métier */}
            <div>
                <label htmlFor="idLevel4">Choisissez un intitulé de métier  : </label>
                <select id="idLevel4" onChange={handleChangeLevel4}>
                    <option value={-1}></option>
                    {idLevel1 !== -1 && idLevel2 !== -1 && idLevel3 !== -1 ? codesRomeTree[idLevel1].children[idLevel2].children[idLevel3].children
                        .map((item, i) => {
                            return (<option key={item.id} value={i}>{item.text} </option>)
                        }) : ""}
                </select>
            </div>

        </div>

    )
}


export default SelectCodeRome;
