import Api from "./Api";

// Post 
export const postRegister = async ( request ) => {
    try {
      const response = await Api.post("user/register", request);
      console.log("Send the request");
      return response.results;
    } catch (error) {
      console.error(error);
    }
};
