import axios from "axios";

const SECRET_KEY = "J7VxvRNAnRj4dvVXd0yV8kV2FDAl25JivTGLNvJH";
const API_KEY = "YsuL0PZuIVsMIYZ8EN1ukeXw1NEswJrXs4i0I4luYoiVnaHqJo";
const PETFINDER_AUTH = "https://api.petfinder.com/v2/oauth2/token";
const PETFINDER_BASE = "https://api.petfinder.com/v2/animals";
const LIMIT = 70;

class PetFinderAPI {

  static async authenticate() {
    const response = await axios.post(PETFINDER_AUTH, {
      "grant_type": "client_credentials",
	    "client_id": API_KEY,
	    "client_secret": SECRET_KEY
    })
    return response.data;
  }

  static async getAnimals(access_token) {
    const response = await axios.get(`${PETFINDER_BASE}?limit=${LIMIT}`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      }
    });
    return response.data;
  }

}
 
export default PetFinderAPI;