import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Dashboard</Link>
        </h1>
        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-5">
            <li>
              <Link href="/connect">
                <div className="hover:font-bold">Connect</div>
              </Link>
            </li>
            <li>
              <Link href="/send-message">
                <div className="hover:font-bold">Send Message</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
