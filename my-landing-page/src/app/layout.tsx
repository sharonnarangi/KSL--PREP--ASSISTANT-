import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KSL Prep Assistant",
  description: "Your AI-powered study companion for KSL preparation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-xl font-bold text-blue-600">KSL Prep Assistant</h1>
            <div className="space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} KSL Prep Assistant. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

