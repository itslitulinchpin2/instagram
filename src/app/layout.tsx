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
      <body className='w-full overflow-auto bg-neutral-50'>
        <AuthContext>
        <header className='sticky top-0 bg-white z-10 border-b'>
          <div className='max-w-screen-xl mx-auto'>
            <AppHeader/>
          </div>
        </header>
        <main className='mx-auto max-w-screen-xl w-full flex justify-center '>
          <SWRConfigContext>
          {children}
          </SWRConfigContext></main>
        </AuthContext>
        <div id='portal'>

        </div>
        </body>
    </html>
  );
}
