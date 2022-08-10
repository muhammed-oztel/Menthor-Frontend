import Api from "./Api";


export const postUserRate = async ( request ) => {
    try {
      const response = await Api.post("setRating/", request);
      return response;
    } catch (error) {
      console.error(error);
    }
};
