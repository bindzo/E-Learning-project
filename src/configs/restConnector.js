import Axios from "axios";

const createConnector = () => {
  const config = {};

  if (localStorage.getItem("accessToken")) {
    config.headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
  }
  console.log(config);

  return Axios.create(config);
};

export const connector = createConnector();
