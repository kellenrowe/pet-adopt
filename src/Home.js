import React from "react";
import Animals from "./Animals";

function Home({ animals }) {

  let featuredAnimals;
  if (animals) {
    const animalsCopy = [...animals];
    featuredAnimals = animalsCopy.filter(animal => animal.photos.length);
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">Featured Animals</h1>
      <main>
        <Animals animals={featuredAnimals}/>
      </main>
    </div>
  );
}

export default Home;