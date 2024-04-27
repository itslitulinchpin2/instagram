import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppHeader from './components/appHeader';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram",
  description: "Clone coding by Seungmin Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body className='w-full max-w-screen-xl overflow-auto mx-auto'>
        <AuthContext>
        <header className='sticky top-0 bg-white z-10 border-b'>
          <AppHeader/>
        </header>
        <main className='w-full flex justify-center bg-neutral-50 min-h-full'>
          <SWRConfigContext>
          {children}
          </SWRConfigContext></main>
        </AuthContext>
        </body>
    </html>
  );
}
