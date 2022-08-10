import Api from "./Api";

// Get
export const fetchMentors = async () => {
    try {
        const response = await Api.get(`user/all/mentor`);
        // console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};
// En başarılı menteeler gelecek