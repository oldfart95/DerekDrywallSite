import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premier Commercial Drywall | Superior Finishing",
  description: "The drywall contractor General Contractors trust in Salem & Mahoning County.",
  openGraph: {
    title: "Premier Commercial Drywall | Superior Finishing",
    description: "The drywall contractor General Contractors trust in Salem & Mahoning County.",
    images: [
      {
        url: "/hero-leveled.JPG",
        width: 1200,
        height: 630,
        alt: "Superior Drywall Finishing - Commercial drywall installation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Commercial Drywall | Superior Finishing",
    description: "The drywall contractor General Contractors trust in Salem & Mahoning County.",
    images: ["/hero-leveled.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

