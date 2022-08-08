import Api from "./Api";


export const getVideoId = async() => {
    try {
        const response = await Api.get("meetroom/Mentee_side/4");
        console.log(response);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};



// Post 
export const postVideoId = async(request, mentorId) => {
    try {

        const response = await Api.post(`meetroom/Mentor_side/${mentorId}`, request);
        console.log("Send the request");

        console.log(request);
        return response.results;

    } catch (error) {
        console.error(error);
    }
};