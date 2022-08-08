import Api from "./Api";

export const postCreateEvent = async (request) => {
  try {
    const response = await Api.post("event/create", request);
    console.log("Send the request");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getEventList = async (request) => {
  try {
    //uploader id
    const response = await Api.get(`event/list/${request.matchId}`, request);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putUpdateEvent = async (request) => {
  try {
    //uploader id
    const response = await Api.put(`event/update/${request.id}`, request);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = async (request) => {
  try {
    //uploader id
    const response = await Api.delete(`event/delete/${request.id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
