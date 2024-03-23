import Header from "@/components/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="flex gap-8">{children}</div>
    </section>
  );
}
