import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ByteSpace | Online learning", description: "Get access to hundreds of courses available on ByteSpace." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

