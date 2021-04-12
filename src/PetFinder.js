import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PetFinderAPI from "./PetFinderAPI";
import NavBar from "./Navbar";
import Home from "./Home";
import Species from "./Species";
import Animal from "./Animal";

/**
 *  PetFinder Component
 * 
 *  Props: none
 *  State:
 *    - accessToken: string like "ksos983j3lsasdf..."
 *    - animals: array of objects like 
 *    [  
        age: "Young"
        attributes: {spayed_neutered: true, ...}
        breeds: {primary: "Domestic Short Hair", ..}
        description: "Brenda is..."
        gender: "Female"
        id: 51006326
        name: "Brenda"
        published_at: "2021-03-26T04:14:08+0000"
        size: "Medium"
        species: "Cat"
        status: "adoptable"
        url: "https://www.petfinder.com/"
 * 
 */
function PetFinder() {
  const [animals, setAnimals] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    async function pfAuth() {
      try {
        const resp = await PetFinderAPI.authenticate();
        setAccessToken(resp.access_token);
      } catch (err) {
        console.log('err :>> ', err);
      }
    }
    pfAuth();
  }, [])

  useEffect(() => {
    async function fetchAnimals() {
      try {
        const allAnimals = await PetFinderAPI.getAnimals(accessToken);
        setAnimals(allAnimals.animals)
      } catch (err) {
      }
    }
    if (accessToken) fetchAnimals();
  }, [accessToken])


  return (
    <div className="PetFinder-main">
      <BrowserRouter>
        <NavBar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home animals={animals} />
            </Route>
            <Route path="/:species">
              <Species animals={animals} />
            </Route>
            <Route path="/:species/:id">
              <Animal animals={animals} />
            </Route>
            <Route>
              <p>Hmm... I can't seem to find the page you're looking for.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default PetFinder;