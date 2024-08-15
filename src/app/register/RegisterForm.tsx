"use client";

import { Formik, Field, ErrorMessage } from "formik";
import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import RedTitleForm from "@/components/RedTitleForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { setupInterceptors } from "@/utils/AxiosInterceptor";
import { BASE_URL } from "@/utils/constant";
import toast from "react-hot-toast";

const RegisterForm = ({ className }: { className: string }) => {
  const initialValues = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
        "Password must include letters, numbers, and a special character."
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required(),
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setupInterceptors({ setShowPopup, setPopupMessage }, router);
  }, [router]);

  const handleRegister = async (values: typeof initialValues) => {
    setIsLoading(true);

    const { confirmPassword, ...dataToSend } = values;

    try {
      const response = await axios.post(
        `${BASE_URL}/user/register`,
        dataToSend
      );
      if (response.status === 200) {
        toast.success("Register Success, Please Login");
        router.push("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <h1 className="text-[33px] font-[700] text-primary-p-one">
        Welcome to YAKUSE!
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-6 mt-[50px]"
            >
              <div className="w-full flex flex-col gap-4">
                <div>
                  <Field
                    component={InputForm}
                    id="fullname"
                    name="fullname"
                    label="Full Name"
                    type="text"
                    placeholder="Full Name"
                    value={values.fullname}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
                <div>
                  <Field
                    component={InputForm}
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div>
                  <Field
                    component={InputForm}
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div>
                  <Field
                    component={InputForm}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div>
                  <Field
                    component={InputForm}
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
              </div>

              <FormButton
                text="Register"
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
              />
            </form>
          );
        }}
      </Formik>

      <div className="flex items-center gap-2 mt-[20px]">
        <p className="text-[14px] font-[500]">Already have an account?</p>
        <Link href="/login">
          <RedTitleForm title="Login" />
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
