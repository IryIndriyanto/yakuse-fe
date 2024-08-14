'use client'
import React, { useState } from 'react';
import DaftarinBisnis1 from '../DaftarinBisnis1';
import DaftarinBisnis2 from '../DaftarinBisnis2';
import DaftarinBisnis3 from '../DaftarinBisnis3';
import { BASE_URL } from '@/utils/constant';

const DaftarinBisnisForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    businessTag: '',
    alamatlokasi: '', // text input
    nomortelepon: '', // should be a string to match input type
    fotoBisnis: '',
    deskripsiBisnis: '',
  });

  const handleNext = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));


    // useEffect
    const form = new FormData();
    form.append('namaBisnis', formData.name);
    form.append('deskripsi', formData.description);
    form.append('tagBisnis', formData.businessTag);
    form.append('alamatLokasi', formData.alamatlokasi);
    form.append('nomorTelepon', formData.nomortelepon);
    form.append('fotoBisnis', formData.fotoBisnis);
    form.append('deskripsiBisnis', formData.deskripsiBisnis);

    try {
      const response = await fetch(`${BASE_URL}/business`, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        alert('Business successfully registered!');
      } else {
        alert('Failed to register business');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
    console.log('button clicked');
  };

  return (
    <div>
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
