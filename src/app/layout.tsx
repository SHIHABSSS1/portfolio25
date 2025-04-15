import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LastUpdateModal from "@/components/LastUpdateModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio showcasing my work, skills, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Force dark mode before any rendering happens */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Set to dark mode by default
                document.documentElement.classList.add('dark');
                
                // Only check for light mode if explicitly set
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  localStorage.setItem('theme', 'dark');
                }
              } catch (e) {}
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8f9fa] dark:bg-[#0f172a] text-gray-900 dark:text-white`}
      >
        {children}
        <LastUpdateModal />
      </body>
    </html>
  );
}
