import axios from "axios";

export const fetchAllCampers = () => {
  return axios.get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
};

export const fetchCamperById = (id) => {
  return axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
};
