import React from 'react'
import Footer from '@/components/Footer'
import LandingNavbar from '@/components/landingNavbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`w-[1920px] bg-primary-p-three max-w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]`}
    >
      <LandingNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout