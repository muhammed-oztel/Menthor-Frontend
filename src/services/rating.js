import Api from "./Api";


export const postUserRate = async ( request ) => {
    try {
      const response = await Api.post("setRating/", request);
      return response;
    } catch (error) {
      console.error(error);
    }
};


export const getUserRate = async ( id ) => {
  try {
    console.log(id);
    const response = await Api.get(`getRating/${id}`, id);
    return response[0];
  } catch (error) {
    console.error(error);
  }
};
