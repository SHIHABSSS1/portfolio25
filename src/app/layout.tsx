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
        {/* More aggressive theme application script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // First, force dark mode
                document.documentElement.classList.add('dark');
                
                // Check localStorage only for explicit light preference
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  // If no preference or dark preference, force dark mode
                  localStorage.setItem('theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
                
                // Add window-level helper for debugging
                window.toggleTheme = function() {
                  const isDark = document.documentElement.classList.contains('dark');
                  console.log('Manual theme toggle, current dark mode:', isDark);
                  
                  if (isDark) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                    console.log('→ Switched to light mode');
                  } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    console.log('→ Switched to dark mode');
                  }
                }
              } catch (e) {
                console.error('Theme initialization error:', e);
              }
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
