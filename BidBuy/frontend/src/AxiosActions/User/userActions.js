import { api } from "../../App.jsx";

export const Register = async (sendData) => {
  await api
    .post("/register", sendData)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
