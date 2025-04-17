// src/app/(dashboard)/layout.js
import "./../globals.css";

export const metadata = {
  title: "WhatsApp Chatbot Dashboard",
  description: "Dashboard for managing WhatsApp chatbot sessions",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
