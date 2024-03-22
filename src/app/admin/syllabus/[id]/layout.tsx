import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const SyllabusLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="flex gap-8">
        <Navbar />
        {children}
      </div>
    </section>
  );
};

export default SyllabusLayout;
