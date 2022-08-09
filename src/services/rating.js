import Api from "./Api";


export const postRate = async ( request ) => {
    try {
      const response = await Api.post("menthor/rate", request);
      return response;
    } catch (error) {
      console.error(error);
    }
};
