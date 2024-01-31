import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="flex gap-8">
        {children}
      </div>
    </section>
  );
}
