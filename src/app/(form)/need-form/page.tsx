"use client";

import FormButton from "@/components/FormButton";
import InputForm from "@/components/InputForm";
import TextArea from "@/components/TextArea";
import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const router = useRouter();

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

  async function handleSubmit(values: typeof initialValues) {
    setIsLoading(true);
    setIsDisable(true);

    try {
      const response = await axios.post(`${BASE_URL}/user-need/`, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.status === 201) {
        toast.success("Permintaan Created");
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
          Bikin Permintaan
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
                    className="text-red-500 text-[14px] font-[500] h-[20px] text-wrap"
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
                  />
                  <ErrorMessage
                    name="description"
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