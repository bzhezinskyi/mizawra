import { Suspense } from "react";
import "../styles/globals.css";

import Header from "./components/header/Header";
import { roboto_mono } from "../styles/fonts";
import Loading from "./loading";
import AuthRout from "./authRoute";

export const metadata = {
  title: "MiZaWra",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body className="container mx-auto">
        <Header />
        <Suspense fallback={<Loading />}>
          <AuthRout>
            <main>{children}</main>
          </AuthRout>
        </Suspense>
      </body>
    </html>
  );
}