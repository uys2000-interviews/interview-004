import axios from "axios";

const api = "http://localhost:3001/api/data";
export const getAllData = function () {
  return axios.get(api).catch((err) => {
    console.log(err);
    return false;
  });
};
export const sendAddedData = function (data) {
  return axios.post(api, data).catch((err) => {
    console.log(err);
    return false;
  });
};
export const sendRemovedData = function (index) {
  return axios.delete(`${api}/${index}`).catch((err) => {
    console.log(err);
    return false;
  });
};
