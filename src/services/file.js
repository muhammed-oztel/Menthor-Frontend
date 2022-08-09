import { navigate } from "svelte-routing";
import Api from "./Api";



// Post 
export const uploadFiles = async (request) => {
  try {
    const response = await Api.post("upload", request);
    console.log(response);
    console.log(response.message);
    return response;
  } catch (error) {
    console.error(error);
  }
};
// Delete
export const deleteFiles = async (request) => {
  try {
    //file id
    const response = await Api.delete(`delete/${request}`);
    console.log(response);
    console.log(response.message);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const downloadFiles = async (request) => {
  try {
    navigate("http://93.115.79.25:8080/download/" + request);
  } catch (error) {
    console.log(error);
  }
}
// Get
export const getFiles = async (request) => {
  try {
    //uploader id
    const response = await Api.get(`listfiles/${request}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
