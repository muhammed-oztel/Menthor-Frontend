import Api from "./Api";

export const fetchUser = async (id) => {
    try {
        const response = await Api.get(`user/single/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const updateUser = async (id, request) => {
    console.log(id);
    console.log(request);
    try {
        const response = await Api.put(`user/update/${id}`, request);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const addInterest = async (request) => {
    console.log(request);
    try {
        const response = await Api.post(`userDetail/create`, request);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const fetchInterest = async (id) => {
    try {
        const response = await Api.get(`userDetail/listId/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await Api.delete(`user/delete/${id}`);
        console.log(id);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

