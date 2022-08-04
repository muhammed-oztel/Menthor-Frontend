import Api from "./Api";

export const getVideoId= async () => {
    try {
      const response = await Api.get("system/login");
      return response.results;
    } catch (error) {
      console.error(error);
    }
};



// Post 
export const postVideoId = async ( request ) => {
    try {
      const response = await Api.post("system/login", request);
      console.log("Send the request");
      return response.results;
    } catch (error) {
      console.error(error);
    }
};