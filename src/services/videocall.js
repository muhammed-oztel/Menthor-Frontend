import Api from "./Api";


export const getVideoId= async (menteeid) => {
    try {
      const response = await Api.get(`meetroom/Mentee_side/${menteeid}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
};



// Post 
export const postVideoId = async ( request, mentorid ) => {
    try {
     
      const response = await Api.post(`meetroom/Mentor_side/${mentorid}`, request);
      console.log("Send the request");
      
     console.log(request);
      return response.results;
      
    } catch (error) {
      console.error(error);
    }
};