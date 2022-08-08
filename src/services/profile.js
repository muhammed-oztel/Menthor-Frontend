import Api from "./Api";
// Get
export const getUserInfos = async ( id) => {
    try {
      const response = await Api.get(`user/single/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};
