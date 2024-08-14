'use client';

import FormButton from '@/components/FormButton';
import TextArea from '@/components/TextArea';
import InputForm from '@/components/InputForm';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

// Pada file ini, kita akan membuat form untuk mengisi nama bisnis dan deskripsi bisnis
// body yang di perlukan untuk endpoint ini adalah
// {
//   name: string,
//   description: string
// }


const DaftarinBisnis1 = ({ next, data }: any) => {
  //   const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: data.name || '',
    description: data.description || '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .typeError('Nama Bisnis harus berupa teks.')
      .required('Nama Bisnis anda wajib diisi.'),
    description: Yup.string()
      .typeError('Deskripsi Bisnis harus berupa teks.')
      .required('Deskripsi Bisnis anda wajib diisi.'),
  });

  // submit menggunakan baseurl yang di env.local
  const handleSubmit = (values:any) => {
    next(values);
  };

  return (
    <main className="h-[100vh] flex items-center justify-center">
      <div className="max-w-[600px] flex flex-col justify-center items-center">
        <h1 className="text-[33px] font-[700] text-blue-400">
          Daftarin Bisnis
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
                    component={TextArea}
                    id="description"
                    name="description"
                    label="Deskripsi Bisnis"
                    placeholder="Deskripsi Bisnis Anda"
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

                {/* Button berikutnya */}
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

export default DaftarinBisnis1;