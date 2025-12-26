import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superior Drywall Finishing - Commercial & Residential Drywall in Columbiana & Mahoning County",
  description: "Premier commercial and residential drywall systems in Columbiana & Mahoning County. 15-man crew delivering Level 5 finishes, metal stud framing, and acoustic ceilings. Licensed, fully insured, OSHA compliant.",
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

