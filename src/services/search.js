import Api from "./Api";
// Get
export const searchMentor = async ( name ) => {
    try {
      const response = await Api.get(`user/search/${name}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
};
