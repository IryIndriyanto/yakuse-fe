"use client";

import FormButton from "@/components/FormButton";
import TextArea from "@/components/TextArea";
import InputForm from "@/components/InputForm";
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
    title: "",
    description: "",
    businessTag: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title wajib diisi."),
    description: Yup.string().required("Deskripsi wajib diisi."),
    businessTag: Yup.string(),
  });

  function handleSubmit() {}

  return (
    <main className="h-[80vh] flex items-center justify-center">
      <div className="max-w-[600px] flex flex-col justify-center items-center">
        <h1 className="text-[33px] font-[700] text-blue-400">
          Bikin Permintaan
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
                    id="title"
                    name="title"
                    label="Title"
                    type="text"
                    placeholder="Title"
                    value={values.title}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div className="w-full">
                  <Field
                    component={TextArea}
                    id="description"
                    name="description"
                    label="Description"
                    placeholder="Description"
                    value={values.description}
                    onChange={handleChange}
                    className="h-[220px]"
                  />
                  <ErrorMessage
                    name="description"
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
