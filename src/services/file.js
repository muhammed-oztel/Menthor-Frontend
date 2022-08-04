import Api from "./Api";



// Post 
export const uploadFiles = async ( request ) => {
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
export const deleteFiles = async ( request ) => {
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
// Get
export const getFiles = async ( request ) => {
    try {
      //uploader id
      const response = await Api.get(`listfiles/${request}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
};
