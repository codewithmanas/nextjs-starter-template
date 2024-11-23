import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NextJS Starter Template",
  description: "NextJS Starter Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
