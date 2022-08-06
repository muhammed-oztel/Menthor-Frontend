import Api from "./Api";


export const getVideoId= async () => {
    try {
      const response = await Api.get("meetroom/Mentee_side/1");
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
};



// Post 
export const postVideoId = async ( request ) => {
    try {
     
      const response = await Api.post("meetroom/Mentor_side/2", request);
      console.log("Send the request");
      
     console.log(request);
      return response.results;
      
    } catch (error) {
      console.error(error);
    }
};