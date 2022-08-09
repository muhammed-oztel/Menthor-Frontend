import Api from "./Api";
import { getUserInfos } from "./profile";

// request is an user id (mentor or mentee)
export const postMentorMenteeInfo = async (id) => {
  try {
    let ownInfo = await getUserInfos(id);
    const response = await Api.post(`user/panel/${id}`);
    let infos;
    if (!response){return response}

    if (ownInfo.role.toLowerCase() == "mentor") {
      infos = {
        mentor: ownInfo,
        mentee: response,
      };
    } else {
      infos = {
        mentor: response,
        mentee: ownInfo,
      };
    }
    return infos;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMentorMenteeMatch = async (id) => {
  try {
    const response = await Api.delete(`user/deleteMatch/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
