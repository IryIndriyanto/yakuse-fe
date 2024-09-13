const Footer = () => {
  return (
    <footer className="w-full bg-[#FCFCFC] py-8 px-8 sm:px-2 lg:px-[24px] flex justify-between border-t-[1px] border-[#FD5F00] inset-x-0 bottom-0">
      <div className="flex flex-col justify-center gap-4">
        <div>
          <h1 className="text-[38px] text-blue-400 font-bold md:text-[32px]">YAKUSE</h1>
        </div>
      </div>

      <div className="flex items-center gap-16">
        <p>2024 © Yakuse</p>
      </div>
    </footer>
  );
};

export default Footer;
