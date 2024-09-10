"use client";

import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import RedTitleForm from "@/components/RedTitleForm";
import SocialIcon from "@/components/SocialIcon";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setupInterceptors } from "@/utils/AxiosInterceptor";
import { BASE_URL } from "@/utils/constant";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ className }: { className: string }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setupInterceptors({ setShowPopup, setPopupMessage }, router);
  }, [router]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setIsDisable(true);
      try {
        const response = await axios.post(`${BASE_URL}/user/login`, values);
        const accessToken = response.data.access_token;
        if (accessToken) {
          toast.success("Login success");
          localStorage.setItem("access_token", accessToken);
          router.push("/kebutuhan");
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(`${error.response.data.detail}`);
          setIsDisable(false);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className={`w-full h-full ${className}`}>
      <h1 className="text-[33px] font-[700] text-blue-400">
        Welcome to Yakuse!
      </h1>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mt-[50px]">
            <InputForm
              label="Email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}

            <div className="flex flex-col w-full my-4">
              <InputForm
                label="Password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="w-full mt-4 items-center">
              <FormButton
                text="Login"
                type="submit"
                disabled={isDisable}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>

        <div className="flex gap-2 mt-6">
          <p className="text-[14px] font-[500]">Don&#39;t have an account?</p>
          <Link href="/register">
            <RedTitleForm title="Register" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
