"use client";

import FormButton from "@/components/FormButton";
import InputForm from "@/components/InputForm";
import TextArea from "@/components/TextArea";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    "Industri",
    "Kreatif",
    "Pertanian",
    "Teknologi",
    "Pendidikan",
    "Transportasi",
    "Properti",
    "Kuliner",
  ];

  const initialValues = {
    phoneNumber: "",
    address: "",
    aboutMe: "",
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required("Nomor handphone wajib diisi."),
    address: Yup.string().required("Alamat wajib diisi."),
    aboutMe: Yup.string().required("About Me wajib diisi."),
  });

  function handleSubmit() {}

  return (
    <main className="h-[70vh] flex items-center justify-center">
      <div className="max-w-[600px] flex flex-col justify-center items-center">
        <h1 className="text-[33px] font-[700] text-blue-400">
          Perkenalkan Diri Kamu
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Nomor Handphone"
                    type="text"
                    placeholder="Nomor Handphone"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
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
                    id="aboutMe"
                    name="aboutMe"
                    label="About Me"
                    placeholder="About Me"
                    value={values.aboutMe}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="aboutMe"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>


                <FormButton
                  text="Submit"
                  type="submit"
                  disabled={isLoading}
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
