import Api from "./Api";
// Get
export const searchMentor = async ( name ) => {
    try {
      const response = await Api.get(`user/search/${name}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};

export const targetProfile= async (id) => {
try {
  console.log(id);
  localStorage.setItem("target", id);
  const response = await Api.get(`user/single/${id}`);
  return response;
} catch (error) {
 console.log(error); 
}
}
