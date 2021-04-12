import React from "react";
import Animal from "./Animal";
import "./Animals.css";
import { ListGroup } from "reactstrap";

 // TODO add docstring

function Animals({ animals }) {
  
  let animalList;
  if (animals) {
    animalList = (
      <ListGroup className="AnimalsList">{animals.map((animal) => (
        <Animal key={animal.id} animal={animal} />))}
      </ListGroup>
    );
  } else {
    animalList = <p>Loading...</p>
  }

  return (
    <div>
      {animalList}
    </div>
  )
}

export default Animals;