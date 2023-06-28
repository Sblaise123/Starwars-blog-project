import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom"
import { Context } from "../store/appContext.js"

import { CharacterDets } from "../component/CharacterDet";
import { VehicleDets } from "../component/VehicleDets";
import { PlanetDets } from "../component/PlanetDets";

export const Home = () => {
  

  return (
    <div className="mt-5 bg-secondary"> 
      <CharacterDets/>
      <VehicleDets/>
      <PlanetDets/>
    </div>

  );



  };