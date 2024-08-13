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
    businessTag: "",
  };

  const validationSchema = Yup.object({
    birthYear: Yup.string().required("Tahun lahir wajib diisi."),
    education: Yup.string().required("Pendidikan wajib diisi."),
    phoneNumber: Yup.string().required("Nomor handphone wajib diisi."),
    businessTag: Yup.string().required("Bisnis tag wajib dipilih."),
  });

  function handleRegister() {}

  return (
    <main className="h-[100vh] flex items-center justify-center">
      <div className="max-w-[600px] flex flex-col justify-center items-center">
        <h1 className="text-[33px] font-[700] text-blue-400">
          Perkenalkan Diri Kamu
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => {
            return (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-6 mt-[50px]"
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

                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`border border-gray-400 rounded-full px-4 py-2 text-gray-700 transition ${
                        values.businessTag === category
                          ? "bg-blue-400 text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setFieldValue("businessTag", category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <p className="font-bold">Bisnis Tag</p>

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
