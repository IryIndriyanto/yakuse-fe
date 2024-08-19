"use client";

import TextArea from "@/components/TextArea";
import InputForm from "@/components/InputForm";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

const EditBisnis1 = ({ next, data }: any) => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .typeError("Nama Bisnis harus berupa teks.")
      .required("Nama Bisnis anda wajib diisi."),
    omset: Yup.number()
      .typeError("Omset harus berupa angka.")
      .required("Omset anda wajib diisi."),
    description: Yup.string()
      .typeError("Deskripsi Bisnis harus berupa teks.")
      .required("Deskripsi Bisnis anda wajib diisi."),
  });

  const handleSubmit = (values: any) => {
    next(values);
  };
  if (!data.name) {
    return null;
  }

  return (
    <main className="flex items-center justify-center">
      <div className="max-w-[600px] flex flex-col justify-center items-center">
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => {
            return (
              <form
                onSubmit={handleSubmit}
                className="m-0 w-[715px] flex flex-col items-center justify-center py-0 px-5 box-border gap-[50px] max-w-full mq750:gap-[25px]"
              >
                <div className="w-full">
                  <Field
                    component={InputForm}
                    id="name"
                    name="name"
                    label="Nama Bisnis"
                    type="text"
                    placeholder="Nama Bisnis Anda"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div className="w-full">
                  <Field
                    component={InputForm}
                    id="omset"
                    name="omset"
                    label="Omset"
                    type="number"
                    placeholder="Omset Bisnis Anda"
                    value={values.omset}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="omset"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div className="w-full">
                  <Field
                    component={TextArea}
                    id="description"
                    name="description"
                    label="Deskripsi Bisnis"
                    placeholder="Deskripsi Bisnis Anda"
                    onChange={handleChange}
                    value={values.description}
                    className="h-[calc(100vh*0.4)]"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[34px] flex justify-center items-center rounded-[10px] bg-[#525455] hover:bg-[#525455]/80 text-[18px] text-[#FFFFFF]"
                >
                  Berikutnya
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </main>
  );
};

export default EditBisnis1;