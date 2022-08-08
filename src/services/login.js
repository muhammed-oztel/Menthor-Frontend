import Api from "./Api";

export const postLogin = async ( request ) => {
    try {
      const response = await Api.post("menthor/login", request);
      localStorage.setItem("token", response.token);
      localStorage.setItem("uid", response.id);
      console.log("Send the request");
      return response;
    } catch (error) {
      console.error(error);
    }
};
