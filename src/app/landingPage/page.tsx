import React from 'react'
import LandingNavbar from '@/components/landingNavbar'

const landingpage = () => {
  return (
    <div
      className={`w-[1920px] bg-primary-p-three max-w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]`}
    >
      <LandingNavbar />
    </div>
  );
}

export default landingpage