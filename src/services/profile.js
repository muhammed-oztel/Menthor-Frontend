import Api from "./Api";
// Get

export const getUserInfos = async (id) => {
  try {
    const response = await Api.get(`user/single/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getEventList = async (id) => {
  try {
    const response = await Api.get(`event/list/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const checkCurrentEvent = (eventList) => {
  let currentEventList = [];
  let currentTime = new Date();

  eventList.forEach(event => {
    let eventTime = new Date(event.start);
    if (eventTime > currentTime) {
      currentEventList.push(event);
    }
  }
  );

  return currentEventList;
}