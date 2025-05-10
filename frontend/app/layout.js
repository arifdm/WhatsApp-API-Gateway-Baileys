// src/app/(dashboard)/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "WhatsApp Chatbot Dashboard",
  description: "Dashboard for managing WhatsApp chatbot sessions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
