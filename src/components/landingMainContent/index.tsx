'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LandingMainContain = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/register');
  };

  const handleBenefit = () => {
    router.push('/#benefit-section');
  };

  return (
    <main className="self-stretch flex flex-col items-center justify-start py-[50px] px-5 box-border gap-[150px] max-w-full gap-[37px] mq825:pt-5 mq825:pb-5 mq825:box-border gap-[19px] gap-[75px] mq1450:pt-[21px] mq1450:pb-[21px] mq1450:box-border">
      {/* Main Section */}
      <section className="w-[1520px] flex flex-row items-start justify-start gap-[100px] max-w-full text-center text-29xl text-primary-p-four font-para-date gap-[50px] gap-[25px] mq1450:flex-wrap">
        {/* Main description */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] gap-[25px]">
          {/* Main headline */}
          <h2 className="m-0 self-stretch relative text-inherit leading-[54px] font-semibold font-[inherit] mq825:text-19xl mq825:leading-[43px] mq450:text-10xl mq450:leading-[32px]">
            Temukan kebutuhan bisnismu bersama YAKUSE!
          </h2>

          {/* Main description */}
          <div className="self-stretch text-center relative text-9xl leading-[34px] text-black-b-two mq450:text-3xl mq450:leading-[27px]">
            <p className="m-0">
              YAKUSE adalah aplikasi yang menghubungkan pelanggan dengan UMKM
              lokal. Pasarkan dan temukan produk dan layanan dari bisnis kecil
              di sekitarmu dengan mudah di sini.
            </p>
            <p className="m-0">Dukung UMKM lokal bersama Yakuse!</p>
          </div>

          {/* Button Container */}
          <div className="self-stretch flex items-center justify-center gap-[50px] gap-[25px]">
            <button
              onClick={handleSignUp}
              className="bg-[#005792] text-white text-3xl font-semibold py-[15px] px-[50px] rounded-[10px] hover:bg-primary-p-two"
            >
              Daftar Sekarang!
            </button>

            <button
              onClick={handleBenefit}
              className="bg-white text-[#005792] border border-[#005792] text-3xl font-semibold py-[15px] px-[50px] rounded-[10px] hover:bg-white-w-two"
            >
              {`Pelajari Lebih Lanjut >`}
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="h-[440px] w-[550px] relative min-w-[550px] max-w-full mq825:min-w-full mq1450:flex-1">
          {/* Ellipse Image (Background) */}
          <Image
            className="absolute inset-0 z-0"
            alt=""
            src="/ellipse-5.svg"
            width={600}
            height={440}
          />

          {/* Rectangle Image (Foreground) */}
          <Image
            className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            loading="lazy"
            alt=""
            src="/rectangle-1@2x.png"
            width={484.8}
            height={334.1}
            objectFit="cover"
          />
        </div>
      </section>

      {/* Benefit Section */}
      <section
        id="benefit-section"
        className="w-[1520px] rounded-[50px] bg-white-w-two overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[100px] max-w-full text-center text-21xl text-black font-para-date gap-[50px] mq825:pt-[65px] mq825:pb-[65px] mq825:box-border gap-[25px]"
      >
        <h3 className="m-0 w-[1096px] relative text-inherit leading-[46px] font-semibold font-[inherit] inline-block max-w-full mq825:text-13xl mq825:leading-[37px] mq450:text-5xl mq450:leading-[28px]">
          Fitur Spesial Untukmu!
        </h3>

        <div className="w-[1185px] overflow-x-auto flex flex-row items-center justify-between gap-[-200px] max-w-full text-lg">
          <div
            className={`w-[200px] shrink-0 flex flex-col items-end justify-start gap-[13px] z-[4] text-center text-9xl text-black font-para-date`}
          >
            <Image
              className="relative overflow-hidden shrink-0 object-cover"
              src="/cardbenefit-1@2x.png"
              alt="Temukan Kebutuhan"
              width={200}
              height={195}
            />
            <div className="self-stretch relative leading-[34px] mq450:text-3xl mq450:leading-[27px]">
              Temukan Kebutuhan
            </div>
          </div>
          <div
            className={`w-[200px] shrink-0 flex flex-col items-end justify-start gap-[13px] z-[4] text-center text-9xl text-black font-para-date`}
          >
            <Image
              className="relative overflow-hidden shrink-0 object-cover"
              src="/cardbenefit-2@2x.png"
              alt="Temukan Pembeli"
              width={200}
              height={195}
            />
            <div className="self-stretch relative leading-[34px] mq450:text-3xl mq450:leading-[27px]">
              Temukan Pembeli
            </div>
          </div>
          <div
            className={`w-[200px] shrink-0 flex flex-col items-end justify-start gap-[13px] z-[4] text-center text-9xl text-black font-para-date`}
          >
            <Image
              className="relative overflow-hidden shrink-0 object-cover"
              src="/cardbenefit-3@2x.png"
              alt="Info UMKM"
              width={200}
              height={195}
            />
            <div className="self-stretch relative leading-[34px] mq450:text-3xl mq450:leading-[27px]">
              Info UMKM
            </div>
          </div>
        </div>
      </section>

      {/* Benefit List with description Section */}
      <section className="w-[1520px] rounded-[50px] overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[100px] max-w-full text-center text-21xl text-black font-para-date gap-[50px] mq825:pt-[65px] mq825:pb-[65px] mq825:box-border gap-[25px]">
        <div className="w-[1520px] flex flex-row items-start justify-start gap-[50px] max-w-full gap-[25px] mq1450:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-start pt-[118.5px] px-0 pb-0 box-border min-w-[695px] max-w-full mq825:min-w-full">
            <h4>Temukan Kebutuhan</h4>
            <div>
              Fitur yang memungkinkan UMKM untuk mencari dan menemukan produk
              atau layanan yang mereka butuhkan
            </div>
          </div>
          <Image
            className="relative max-h-full shrink-0 object-cover max-w-full mq1450:flex-1"
            src="/frame-80-1@2x.png"
            alt="Temukan Kebutuhan"
            width={400}
            height={400}
          />
        </div>

        <div className="w-[1520px] flex flex-row items-start justify-start gap-[50px] max-w-full gap-[25px] mq1450:flex-wrap">
          <Image
            className="relative max-h-full shrink-0 object-cover max-w-full mq1450:flex-1"
            src="/frame-80-2@2x.png"
            alt="Temukan Pembeli"
            width={400}
            height={400}
          />
          <div className="flex-1 flex flex-col items-center justify-start pt-[118.5px] px-0 pb-0 box-border min-w-[695px] max-w-full mq825:min-w-full">
            <h4>Temukan Pembeli</h4>
            <div>
              Fitur yang memungkinkan UMKM untuk menemukan peluang bisnis dengan
              melihat kebutuhan pelaku UMKM lainnya
            </div>
          </div>
        </div>

        <div className="w-[1520px] flex flex-row items-start justify-start gap-[50px] max-w-full gap-[25px] mq1450:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-start pt-[118.5px] px-0 pb-0 box-border min-w-[695px] max-w-full mq825:min-w-full">
            <h4>Info UMKM</h4>
            <div>
              Fitur yang memungkinkan UMKM untuk mendapatkan informasi terkait
              UMKM lainnya
            </div>
          </div>
          <Image
            className="relative max-h-full shrink-0 object-cover max-w-full mq1450:flex-1"
            src="/frame-80-11@2x.png"
            alt="Info UMKM"
            width={400}
            height={400}
          />
        </div>
      </section>
    </main>
  );
};

export default LandingMainContain;