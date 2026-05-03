import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-sun-50 via-white to-ocean-50">
        <div className="flex items-center justify-center px-4 py-10">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}