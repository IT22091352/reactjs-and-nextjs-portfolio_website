import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

{/* <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
<div className="basis-1/3 flex-1">
  <Image
    src={imag2}
    alt="web images"
    className="rounded-lg object-cover w-full h-full"
    layout="responsive"
  />
</div>
<div className="basis-1/3 flex-1">
  <Image
    src={imag2}
    alt="web images"
    className="rounded-lg object-cover w-full h-full"
    layout="responsive"
  />
</div>
<div className="basis-1/3 flex-1">
  <Image
    src={imag2}
    alt="web images"
    className="rounded-lg object-cover w-full h-full"
    layout="responsive"
  />
</div>
<div className="basis-1/3 flex-1">
  <Image
    src={imag3}
    alt="web images"
    className="rounded-lg object-cover w-full h-full"
    layout="responsive"
  />
</div>
<div className="basis-1/3 flex-1">
  <Image
    src={imag1}
    alt="web images"
    className="rounded-lg object-cover w-full h-full"
    layout="responsive"
  />
</div>
<div className="basis-1/3 flex-1">
  <Image
    src={imag2}
    alt="web images"
    className="rounded-lg object-cover w-full h-full"
    layout="responsive"
  />
</div>
</div> */}
