import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";
import { redirect } from "next/navigation";

export interface POST_Purchase_Params {
  token: string;
  course_id: number;
}

export async function POST_Purchase(data: POST_Purchase_Params, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios.post(API_PATH + "purchases/bog/create-order/" + data.course_id, null, config);
    console.log(response.data);
    const paymentHref = response.data.links.redirect.href;
    window.location.href = paymentHref;
    // toast.success("კურსი ნაყიდია", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 2000,
    // });

    return response.data;
  } catch (error: any) {
    console.error("Error during purchase:", error);
    if (error.response && error.response.status === 401) {
      dispatch(removeUser());
      redirect("/");
    }
    toast.error("დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });

    throw error;
  }
}
