import axios from "axios";
const url = "https://smarteducation.shop/smarteducation_backend/public/admin";
import { parseCookies } from "nookies";

export const storeCategory = async (data: any) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(url + "/category/store", data, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.delete(url + "/category/" + id, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};
