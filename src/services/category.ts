import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";
const url = { API_ADMIN_PATH };
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
    const response = await axios.post(API_ADMIN_PATH + "category/store", data, config);
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
    const response = await axios.delete(API_ADMIN_PATH + "category/" + id, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};
