import "./Animal.css";
import { ListGroupItem } from "reactstrap";

const DEFAULT_IMAGE =
"https://www.masteryma.com/wp-content/uploads/2017/04/default-image-620x600.jpg";

 /** TODO add doc string */
function Animal({ animal }) {

  const animalImg = animal.photos.length
    ? animal.photos[0].medium
    : DEFAULT_IMAGE;
  
  return (
    <div className="col-9 col-md-6 col-lg-4 col-xl-3 px-0 mb-5 AnimalBox">
      <a href={animal.url} target="_blank" rel="noreferrer">
        <ListGroupItem className="mx-auto borderedBox">
          <div className="imgDiv text-center mb-3">
            <img
              className="animalImg"
              src={animalImg}
              alt={animal.id} />
          </div>
          <div className="animalTxt">
            <p
              className="mb-0 text-center">
              {animal.age} | {animal.gender} | {animal.size}</p>
            <hr/>
            <p className="mb-0"><b>Name: </b>{animal.name}</p>
            <p className="mb-0"><b>Breed: </b>{animal.breeds.primary}</p>
            <p className="mb-0"><b>Status: </b>{animal.status}</p>
          </div>
        </ListGroupItem>
      </a>
    </div>
  )
}

export default Animal;