"use client";

import FormButton from "@/components/FormButton";
import InputForm from "@/components/InputForm";
import TextArea from "@/components/TextArea";
import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const router = useRouter();

  const initialValues = {
    phone: "",
    address: "",
    about_me: "",
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(
        /^[0-9]{10,14}$/,
        "Nomor handphone tidak valid. Harus berupa angka antara 10-14 digit."
      )
      .required("Nomor handphone wajib diisi."),
    address: Yup.string().required("Alamat wajib diisi."),
    about_me: Yup.string().required("About Me wajib diisi."),
  });

  async function handleEditProfile(values: typeof initialValues) {
    setIsLoading(true);
    setIsDisable(true);

    try {
      const response = await axios.put(`${BASE_URL}/user/edit`, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.status === 201) {
        toast.success("Profile Updated");
        router.push("/profile-user");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`${error.response.data.detail}`);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-[70vh] pt-4 flex items-center justify-center">
      <div className="w-[550px] p-12 flex flex-col justify-center items-center shadow-lg">
        <h1 className="text-[33px] font-[700] text-blue-400">
          Perkenalkan Diri Kamu
        </h1>

        <div className="w-full my-2 flex justify-between">
          <p className="text-p-four underline">Gambaran Umum</p>
          <Link className="hover:text-p-four hover:underline" href="/edit-profile-photo">Foto Kamu</Link>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleEditProfile}
        >
          {({ values, handleChange, handleSubmit }) => {
            return (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-6 w-full mt-[50px]"
              >
                <div className="w-full">
                  <Field
                    component={InputForm}
                    id="phone"
                    name="phone"
                    label="Nomor Handphone"
                    type="text"
                    placeholder="Nomor Handphone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] text-wrap"
                  />
                </div>

                <div className="w-full">
                  <Field
                    component={InputForm}
                    id="address"
                    name="address"
                    label="Alamat"
                    type="text"
                    placeholder="Alamat"
                    value={values.address}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div className="w-full">
                  <Field
                    component={TextArea}
                    id="about_me"
                    name="about_me"
                    label="About Me"
                    placeholder="About Me"
                    value={values.about_me}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="about_me"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <FormButton
                  text="Submit"
                  type="submit"
                  disabled={isDisable}
                  isLoading={isLoading}
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </main>
  );
};

export default EditProfile;
