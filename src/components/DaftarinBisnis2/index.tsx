'use client';

import FormButton from '@/components/FormButton';
import TextArea from '@/components/TextArea';
import InputForm from '@/components/InputForm';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

// Pada file ini, kita akan membuat form untuk mengisi alamat lokasi dan nomor telepon bisnis
// body yang di perlukan untuk endpoint ini adalah
// {
//   location: string,
//   contact: string
// }

const DaftarinBisnis2 = ({ next, prev, data }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    'Industri',
    'Kreatif',
    'Pertanian',
    'Teknologi',
    'Pendidikan',
    'Transportasi',
    'Properti',
    'Kuliner',
  ];

  const initialValues = {
    location: data.location || '',
    contact: data.contact || '',
    fk_business_category_id: data.fk_business_category_id || '',
  };

  const validationSchema = Yup.object({
    location: Yup.string().required(
      'Alamat lokasi bisnis anda wajib diisi.'
    ),
    contact: Yup.string()
      .typeError('Nomor telepon harus berupa angka.')
      .required('Nomor telepon bisnis anda wajib diisi.'),
    businessTag: Yup.string(),
  });

  const handleSubmit = (values: any) => {
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
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <form
              onSubmit={handleSubmit}
              className="m-0 w-[715px] flex flex-col items-center justify-center py-0 px-5 box-border gap-[10px] max-w-full mq750:gap-[25px]"
            >
              {/* Alamat Lokasi */}
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

              {/* Nomor Telepon */}
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

              {/* Bisnis Tag */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`border border-gray-400 rounded-full px-4 py-2 text-gray-700 transition ${
                      values.fk_business_category_id === index
                        ? 'bg-blue-400 text-white'
                        : 'hover:bg-gray-200'
                    }`}
                    onClick={() => setFieldValue('fk_business_category_id', index)}// 
                  >
                    {category}
                  </button>
                ))}
              </div>
              <p className="font-bold">Bisnis Tag</p>

              <div className="flex flex-row gap-4">
                {/* Button sebelumnya */}
                <button
                  type="button"
                  className="w-full h-[40px] flex justify-center items-center rounded-[10px] bg-[#525455] hover:bg-[#525455]/80 text-[18px] text-[#FFFFFF]"
                  onClick={prev}
                >
                  Sebelumnya
                </button>

                {/* Button berikutnya */}
                <button
                  type="submit"
                  className="w-full h-[40px] flex justify-center items-center rounded-[10px] bg-[#525455] hover:bg-[#525455]/80 text-[18px] text-[#FFFFFF]"
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

export default DaftarinBisnis2;