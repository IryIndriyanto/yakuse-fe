"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DaftarinBisnis1 from "../DaftarinBisnis1";
import DaftarinBisnis2 from "../DaftarinBisnis2";
import DaftarinBisnis3 from "../DaftarinBisnis3";
import { BASE_URL } from "@/utils/constant";

const DaftarinBisnisForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    omset: 0,
    description: "",
    location: "",
    contact: "",
    fk_business_category_id: "",
    photo_url: "",
  });

  const router = useRouter();

  const handleNext = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    const fileInput = document.getElementById("photo_url")! as HTMLInputElement;
    console.log(formData.photo_url);

    const form = new FormData();
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      console.log(fileInput.files[0]);
      console.log(formData.photo_url);
      form.append("file", fileInput.files[0], fileInput.files[0].name);
    }

    try {
      const token = localStorage.getItem("access_token");
      console.log(formData.fk_business_category_id);
      const queryCreateBusiness =
        `?name=${encodeURIComponent(formData.name)}` +
        `&omset=${formData.omset}` +
        `&description=${encodeURIComponent(formData.description)}` +
        `&location=${encodeURIComponent(formData.location)}` +
        `&contact=${encodeURIComponent(formData.contact)}` +
        `&fk_business_category_id=${encodeURIComponent(
          formData.fk_business_category_id
        )}`;

      const response = await fetch(
        `${BASE_URL}/business/create${queryCreateBusiness}`,
        {
          method: "POST",
          body: form,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert("Business successfully registered!");
        router.push("/profile-user");
      } else {
        const resData = await response.json();
        console.log(response);
        console.log(response.statusText);
        console.log(resData);
        alert("Failed to register business");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
    console.log("button clicked");
  };

  return (
    <div>
      <h1 className="text-[33px] font-[700] text-blue-400 flex justify-center mb-8">
        Perbarui Bisnis
      </h1>
      <div className="flex justify-center mb-8">
        <div
          className={`mx-4 ${step === 1 ? "text-[#FD5F00]" : "text-gray-500"}`}
        >
          Gambaran Umum
        </div>
        <div
          className={`mx-4 ${step === 2 ? "text-[#FD5F00]" : "text-gray-500"}`}
        >
          Detail Bisnis
        </div>
        <div
          className={`mx-4 ${step === 3 ? "text-[#FD5F00]" : "text-gray-500"}`}
        >
          Photo Bisnis
        </div>
      </div>
      {step === 1 && <DaftarinBisnis1 next={handleNext} data={formData} />}
      {step === 2 && (
        <DaftarinBisnis2
          next={handleNext}
          prev={handlePrev}
          submit={handleSubmit}
          data={formData}
        />
      )}
      {step === 3 && (
        <DaftarinBisnis3
          submit={handleSubmit}
          prev={handlePrev}
          data={formData}
        />
      )}
    </div>
  );
};

export default DaftarinBisnisForm;