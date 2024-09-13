"use client";

import FormButton from "@/components/FormButton";
import TextArea from "@/components/TextArea";
import InputForm from "@/components/InputForm";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const EditBisnis2 = ({ next, prev, data }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    'kuliner',
    'industri',
    'kreative',
    'jasa',
    'pertanian',
    'teknologi',
    'pendidikan',
    'kesehatan',
    'transportasi',
    'properti',
  ];

  const initialValues = {
    location: data.location,
    contact: data.contact,
    fk_business_category_id: data.fk_business_category_id,
  };

  const validationSchema = Yup.object({
    location: Yup.string().required("Alamat lokasi bisnis anda wajib diisi."),
    contact: Yup.string()
      .typeError("Nomor telepon harus berupa angka.")
      .required("Nomor telepon bisnis anda wajib diisi."),
    businessTag: Yup.string(),
  });

  const handleSubmit = (values: any) => {
    next(values);
  };

  return (
    <main className="flex items-center justify-center w-[100vw]">
      <div
        className="w-full min-w-[420px] max-w-[700px] flex flex-col justify-center items-center md:px-4"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, setFieldValue, values }) => (
            <form
              onSubmit={handleSubmit}
              className="m-0 w-full flex flex-col items-center justify-center p-10 box-border gap-10 mq750:gap-[25px] shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px]"
            >
              <div className="w-full flex flex-col gap-10">
                <div className="w-full">
                  <Field
                    component={InputForm}
                    id="location"
                    name="location"
                    label="Alamat Lokasi"
                    type="text"
                    placeholder="Alamat Lokasi Bisnis"
                    value={values.location}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>

                <div className="w-full">
                  <Field
                    component={InputForm}
                    id="contact"
                    name="contact"
                    label="Nomor Telepon Bisnis"
                    type="string"
                    placeholder="Nomor Telepon aktif"
                    value={values.contact}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
              </div>

              <div className="w-full justify-center items-center flex flex-col gap-4 mt-4">
                <p className="font-bold">Bisnis Tag</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`border border-gray-400 rounded-full px-4 py-2 text-gray-700 transition ${
                        values.fk_business_category_id === index + 1
                          ? "bg-blue-400 text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => 
                        {setFieldValue("fk_business_category_id", index + 1)
                          console.log(index)} // code block ini di jadiinn {} console.log
                      } //
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-row gap-4 mt-4 w-full">
                <button
                  type="button"
                  className="w-full h-[40px] flex justify-center items-center rounded-[10px] p-4 bg-[#40ABFF] hover:bg-[#40ABFF]/80 text-[18px] text-[#FFFFFF]"
                  onClick={prev}
                >
                  Sebelumnya
                </button>

                <button
                  type="submit"
                  className="w-full h-[40px] flex justify-center items-center rounded-[10px] p-4 bg-[#FD5F00] hover:bg-[#FD5F00]/80 text-[18px] text-[#FFFFFF]"
                >
                  Berikutnya
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default EditBisnis2;
