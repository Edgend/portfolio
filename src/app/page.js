"use client";

import Image from "next/image";
import Experience from "./Components/Experience";
import Projet from "./Components/Projet";
import { useState } from "react";
import Competence from "./Components/Competence";
import Formation from "./Components/Formation";
import data_comp from "./Data/data_competences";
import data_form from "./Data/data_formations";
import data_savoir from "./Data/data_savoir";
import data_exp from "./Data/data_experience";
import data_projet from "./Data/data_projet";

export default function Home() {
  /********************* DONNEES  **************************/

  /********************* EXPERIENCES  **************************/
  var experiences = data_exp();

  /********************* PROJETS  **************************/
  var projets = data_projet();

  /** Affichage dynamique des projets **/
  const [ind_projet, set_ind_projet] = useState(0);
  const display_project = (e) => {
    set_ind_projet(e.target.id);
  };

  /********************* COMPETENCES  **************************/

  var competences = data_comp();

  /** Affichage dynamique des compétences **/
  const [ind_tab_comp, set_ind_tab_comp] = useState(0);
  const display_comp = (e) => {
    set_ind_tab_comp(e.target.id);
  };

  /********************* FORMATIONS  **************************/

  var formations = data_form();

  /** Affichage dynamique des formations **/

  const [ind_formation, set_ind_formation] = useState(0);
  const formation_carousel = (e) => {
    var sign = e.target.id;

    if (sign === "previous") {
      if (ind_formation !== 0) set_ind_formation(ind_formation - 1);
      else set_ind_formation(formations.length - 1);
    } else {
      if (ind_formation < formations.length - 1)
        set_ind_formation(ind_projet + 1);
      else set_ind_formation(0);
    }
  };

  /********************* SAVOIRS  **************************/

  const savoirs = data_savoir();

  /********************* CONSTANTES DE STYLE  **************************/
  const s_sideBar = "h-[100%] w-[17%] fixed bg-upjv flex flex-col border";
  const s_logo = "mx-auto mt-20 scale-[115%]";
  const s_nav =
    "h-[13%] text-xs w-[75%] rounded-sm hover:scale-[105%] mx-auto bg-upjv-2 text-white  flex items-center justify-center border border-black";
  const s_nav_section = "h-[50%] mt-20  space-y-10 ";
  const s_main = "flex flex-col h-[400%] w-[83%] ml-[17%]";
  const s_hr = "w-full h-[0.1em] mt-20 bg-black ";

  return (
    <main className="h-full bg-inherit flex flex-row">
      {/********************* SIDE BAR **********************/}
      <div className={s_sideBar}>
        <Image
          className={s_logo}
          height={300}
          width={200}
          src="./img/logo.png"
        />

        <div className={s_nav_section}>
          <a href="#competences" className={s_nav}>Compétences</a>
          <a href="#experiences" className={s_nav}>Expériences</a>
          <a href="#savoirs" className={s_nav}>Savoir-Être</a>
          <a href="#formations" className={s_nav}>Formations</a>
          <a href="#projets" className={s_nav}>Projets</a>
        </div>
      </div>

      {/********************* SECTION PRINCIPALE **********************/}
      <div className={s_main}>
        {/********************* PRESENTATION **********************/}

        <div className="h-[7%] w-[100%] pt-10 pl-10  ">
          <span className="text-4xl font-serif text-black">
            Benjamin Hilaire
          </span>
          <div className=" flex flex-row mt-4">
            <span className="italic font-serif text-black">
              Le Data Analyst qui donne du poids à vos données, sans leurs lourdeurs.
            </span>
            <span className="ml-4 -mt-2 text-2xl">&#128202;</span>
          </div>
          <br></br>

          <div className="text-justify tracking-wide text-sm font-serif w-[85%]">
            Étant actuellement alternant Data Analyst dans l'équipe Learning chez Roquette Frere j'ai appris deux choses :<br/>
              - 1 Tout les corps de métier ont besoin d'exploiter des données <br/>
              - 2 L'extraction, le traitement, la modélisation et la création de modèles de données nécessite dans la plupart des cas quelqu'un assigné à cette tâche à 100% <br/>
            En se sens, je suis à la recherche d'un poste qui me permettrais de fournir un soutien direct au client sur l'exploitation de ses données de bout-en-bout.
            Selon moi, cette proximité est indispensable afin de comprendre le contexte du métier et les contraintes du client et ainsi lui offrire la meilleur solution possible.
          </div>

          <div className="w-[70%] h-[20%] justify-center mt-4  border-black    grid grid-cols-8">
            <span>&#128233;</span>
            <span className="-ml-[75%] mt-1.5 text-xs">
              : hilairebenjamin@outlook.com
            </span>
            <span>&#128241;</span>
            <span className="-ml-[75%] mt-1.5 text-xs">: 07 63 91 78 99</span>
            <span>&#128664;</span>
            <span className="-ml-[75%] mt-1.5 text-xs">
              : Ile de france / Hauts de france
            </span>
          </div>

          <div className="flex flex-row font-serif justify-center space-x-4 text-sm h-10 w-[20%] absolute top-12 right-10">
            <a
              href="./files/cv.pdf"
              target="blank"
              className="hover:underline hover:cursor-pointer"
            >
              Mon CV
            </a>
            {/* <span className="hover:underline hover:cursor-pointer">
              Ma lettre de motivation
            </span> */}
          </div>
        </div>

        <div className={s_hr}></div>

        {/********************* COMPETENCES **********************/}

        <div id="competences" className=" w-full h-[15%] relative pl-12 pt-10 ">
          <span className=" text-black font-serif text-3xl">COMPÉTENCES</span>
          <br />
          <div className="text-slate-600 text-xs italic mt-2">
            Compétences issue du référentiel présent sur le site du <a href={"https://www.cigref.fr/nomenclature-rh"} target="_blank">CIGREF</a>
            (version 2022)
          </div>

          <div className="flex flex-row mx-auto space-x-7  mt-6 h-[17%] w-[50%]">
            {competences.map((item, index) => {
              return (
                <div
                  id={index}
                  key={index}
                  onClick={display_comp}
                  className={
                    "h-full w-[40%] hover:scale-110 flex items-center justify-center border border-black font-semibold text-white " +
                    item.color
                  }
                >
                  {item.poste}
                </div>
              );
            })}
          </div>

          <div className="no-scrollbar mt-10 overflow-y-auto h-[60%]">
            {competences[ind_tab_comp].comp.map((item, index) => {
              return <Competence key={index} comp={item}></Competence>;
            })}
          </div>
        </div>

        <div className={s_hr}></div>

        {/********************* EXPERIENCES **********************/}
        <div
          id="experiences"
          className=" w-full h-[22%] pt-10 space-y-6  pl-12 "
        >
          <span className=" text-black font-serif text-3xl">EXPÉRIENCES</span>
          <div className="flex flex-col h-[90%] space-y-4 overflow-y-auto">
            {experiences.map((item, index) => {
              return <Experience key={index} exp={item}></Experience>;
            })}
          </div>
        </div>

        <div className={s_hr}></div>

        {/********************* SAVOIR ETRE **********************/}

        <div id="savoirs" className=" w-full h-[15%] relative pl-12 pt-10 ">
          <span className=" text-black font-serif text-3xl">SAVOIR-ÊTRE</span>
          <br />
          <div className="text-slate-600 text-xs italic mt-2">
            Savoir être issue du référentiel présent sur le site de <a href={"https://www.francetravail.fr/files/live/sites/PE/files/fichiers-en-telechargement/referentiel_savoir_etre_professionnels56660.pdf"}target="_blank">France travail</a>
          </div>

          <table className="mt-5 text-center h-[80%] w-[85%] overflow-y-auto text-xs ">
            <tr className="bg-upjv-2 text-xs text-white font-normal">
              <th>Savoir être</th>
              <th>Description</th>
            </tr>
            {savoirs.map((item, index) => {
              return (
                <tr>
                  <td>{item.nom}</td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className={s_hr}></div>

        {/*********************  FORMATIONS **********************/}
        <div
          id="formations"
          className="relative w-full h-[14%] pt-10 space-y-6  pl-12 ">
          <span className=" text-black font-serif text-3xl">FORMATIONS</span>

          <div className="text-slate-600 text-xs italic mt-2">
            Liste des acquis des formations selon le site <a href={"https://www.francecompetences.fr/recherche/rncp/31471/"}>France competences</a>
          </div>

          <span
            id="previous"
            onClick={formation_carousel}
            className="absolute top-[50%] text-6xl  text-upjv-2 hover:cursor-pointer hover:scale-[130%] "
          >
            &#10216;
          </span>

          <span
            id="next"
            onClick={formation_carousel}
            className="absolute top-[50%] right-[10%] hover:cursor-pointer text-upjv-2 text-6xl hover:scale-[130%] "
          >
            &#10217;
          </span>

          <div className="ml-28">
            <Formation form={formations[ind_formation]}></Formation>
          </div>
        </div>

        <div className={s_hr}></div>

        <div id="projets" className="relative w-full h-[14%] pt-10  pl-12 ">
          <span className=" text-black font-serif text-3xl">PROJETS</span>

          <div className="flex flex-row items-center justify-center space-x-10 h-[15%] mt-10  w-[100%] ">
            {projets.map((item, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  onClick={display_project}
                  className="bg-slate-100 border-2 border-black w-[20%] flex items-center text-center justify-center h-full hover:scale-110 text-black text-xs"
                >
                  {item.titre}
                </div>
              );
            })}
          </div>

          <div className=" w-[100%] h-[100%]">
            <Projet projet={projets[ind_projet]}></Projet>
          </div>
        </div>
      </div>
    </main>
  );
}
