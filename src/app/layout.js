import "./globals.css";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import {layout, main } from '@/app/layout.module.scss';
import { YandexMetrica } from "../Components/YandexMetrica.jsx/YandexMetrica";

export const metadata = {
  title: "Shop time",
  description: "iPhone uchun chexollar || Sizning uslubingiz va telefoningiz uchun eng yaxshi himoya",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </head>
      <body >
        <YandexMetrica/>
        <div className={layout}>
          <Header/>
            <main className={main}>
              {children}
            </main>
          {/* <Footer/> */}
        </div>
      </body>
    </html>
  );
}
