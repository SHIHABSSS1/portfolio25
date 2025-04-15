import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - Portfolio",
  description: "Admin panel for portfolio management",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 