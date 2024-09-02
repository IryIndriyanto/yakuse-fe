import Image from "next/image";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-32 py-12">
      <div className="w-full h-full flex items-center justify-center gap-16">
        <RegisterForm className="w-full basis-full" />

        <div className="mq825:hidden w-fit h-full object-contain block ">
          <Image
            src={"/assets/images/two-business-man.png"}
            width={700}
            height={700}
            alt="two businessman talking"
          />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
