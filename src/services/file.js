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
// Get
export const getFiles = async ( request ) => {
    try {
      //uploader_id
      // const response = await Api.get(`download/${request}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
};
