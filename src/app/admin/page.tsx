"use client";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import logo from "@/public/assets/icons/logo.png";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminLogin } from "@/services/login";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";

// Define the Page component
const Page = () => {
  const [errorText, setErrorText] = useState<string>('')
  const router = useRouter();

  // Define yup schema for form validation
  const adminLoginSchema = yup.object({
    email: yup.string().required("გთხოვთ მიუთითოთ ელ-ფოსტა").email("არასწორი ფორმატი"),
    password: yup.string().required("გთხოვთ მიუთითოთ პაროლი"),
  });

  // Initialize useForm hook for form management
  const methods = useForm({
    resolver: yupResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  // Destructure methods object to access formState and handleSubmit
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  // Initialize loading state
  const [loading, setLoading] = useState(false);

  // Define onSubmit function to handle form submission
  const onSubmit = async (values: any) => {
    try {
      setLoading(true); // Set loading state to true when request starts
      const response = await AdminLogin(values);
      if (response) {
        Cookies.set("authToken", response.token);
        router.push("/admin/main");
      } else {
        console.error("Token not found in the response");
        setErrorText("მეილი ან პაროლი არასწორია")
      }
    } catch (error) {
      console.log(123)
      console.error("Error during login:", error);
    } finally {
      setLoading(false); // Set loading state to false when request completes (success or error)
    }
  };

  // Render the component
  return (
    <>
      <FormProvider {...methods}>
        <form className="bg-lightGray h-screen flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[486px] h-[570px] flex flex-col items-center bg-white rounded-[8px] pt-12">
            <Image src={logo} alt="logo" className="w-1/2 h-auto" />
            <p className="text-xl tablet:text-2xl font-semibold mt-6">Smartedu ადმინ პანელი</p>
            <p className=" text-red text-2xl font-bold">{errorText}</p>

            <div className="w-full px-7 flex flex-col gap-1">
              <Input label="ელ-ფოსტა" placeholder="ელ-ფოსტა" name="email" error={errors.email?.message} id="email" />
              <PasswordInput label="პაროლი" name="password" placeholder="პაროლი" error={errors.password?.message} id="password" />
              <div className="w-full mt-8 ">
                <button
                  type="submit"
                  className="bg-mainBlue rounded-faqBordeR w-full text-xl mt-2 text-center text-white hover:opacity-75 transition-all ease-in-out py-2"
                  disabled={loading} // Disable button when loading is true
                >
                  {loading ? "იტვირთება..." : "ავტორიზაცია"} {/* Change button text based on loading state */}
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

// Export the Page component
export default Page;
