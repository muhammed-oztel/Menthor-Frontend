import Api from "./Api";

export const getUserForMatch = async() => {
    try {
        const response = await Api.get(`admin/allUser`);
        return response;
    } catch (error) {
        console.error(error);
    }
};


export const postMatch = async(request) => {
    try {
        const response = await Api.post("admin/match", request);
        console.log("Send the request");
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const DeleteMatchId = async(userId) => {
    try {
        const response = await Api.delete(`admin/deleteMatch/${userId}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getMatches = async() => {
    try {
        const response = await Api.get(`admin/allMatch`);
        return response;
    } catch (error) {
        console.error(error);
    }
};