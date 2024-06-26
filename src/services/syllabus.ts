import { API_ADMIN_PATH } from "@/api/API_PATH";
import { syllabusData } from "@/app/admin/syllabus/[id]/types";
import axios from "axios";
import { parseCookies } from "nookies";

export const getSyllabus = async (course: string) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(API_ADMIN_PATH + "syllabus/index/" + course, config);
    return data;
  } catch (error) {
    return { status: 404 };
  }
};

export const postSyllabus = async (course: string, syllabusData: syllabusData[]) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(API_ADMIN_PATH + "syllabus/store/" + course, { lectures: syllabusData }, config);
    return data;
  } catch (error) {
    return { status: 404 };
  }
};

export const deleteLecture = async (id: number) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.delete(API_ADMIN_PATH + "syllabus/delete/syllabus/" + id, config);
    return response;
  } catch (error) {
    return { status: 404 };
  }
};

export const deleteDescription = async (id: number) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.delete(API_ADMIN_PATH + "syllabus/delete/description/" + id, config);

    return response;
  } catch (error) {
    return { status: 404 };
  }
};

export const changeSyllabusTitle = async (id: number, title: string) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      API_ADMIN_PATH + "syllabus/update/syllabus/" + id,
      {
        title,
      },
      config
    );
    return data;
  } catch (error) {
    return { status: 404 };
  }
};

export const changeDescription = async (id: number, description: string) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      API_ADMIN_PATH + "syllabus/update/description/" + id,
      {
        description,
      },
      config
    );
    return { data, status: 200 };
  } catch (error) {
    return { status: 404 };
  }
};

export const addNewDescription = async (id: number, descriptionArray: string[]) => {
  try {
    const cookies = parseCookies();
    const token = cookies.authToken;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      API_ADMIN_PATH + "syllabus/add-description/" + id,
      {
        descriptions: descriptionArray,
      },
      config
    );
    return { ...response, status: 201 };
  } catch (error) {
    return { status: 404 };
  }
};
