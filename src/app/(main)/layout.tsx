import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
