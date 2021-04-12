import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Animals from "./Animals";

 // TODO add docstring
function Species({ animals }) {
  const { species } = useParams();

  if ((species.toLowerCase() !== "dogs") &&
      (species.toLowerCase() !== "cats")) {
    return <Redirect to="/" />;
  }

  let speciesList;
  if (animals) {
    const animalsCopy = [...animals];
    speciesList = animalsCopy.filter(animal =>
      animal.species.toLowerCase() === species.slice(0,3).toLowerCase());
  }

  const heading = species[0].toUpperCase().concat(species.substring(1));

  return (
    <div className="container">
      <h1 className="text-center my-5"> {heading}</h1>
      <main>
        <Animals animals={speciesList}/>
      </main>
    </div>
  )
}

export default Species;