import axios from "axios";
const baseUrl = "http://localhost:8000/api";

const getRequest = async (endPoint) => {
  const response = await axios.get(`${baseUrl}${endPoint}`);
   if (response.statusText === "OK") {
    return response.data.data;
  }
  return;
};

export const addRequest = async (data, endPoint) => {
  const response = await axios.post(`${baseUrl}${endPoint}`, data);
   if (response.data.success) {    
    return response.data;
  }
  return response.data;
};

export const putRequest = async ( body,endPoint,) => {
   const response = await axios.put(`${baseUrl}${endPoint}`, body, {
    headers: {
      // "content-type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });  
    console.log(response.data.message);
  if (response.data.success === true) {
    return true;
  } else {
    return false;
  }
};

export const deleteRequest = async (endPoint) => {
  const response = await axios.delete(`${baseUrl}${endPoint}`);
  if (response.statusText === "OK") {
    return true;
  } else {
    return false;
  }
};

export default getRequest;
