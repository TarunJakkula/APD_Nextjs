import "./globals.css";
import { poppins } from "./ui/fonts";
import Header from "./Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={` select-none bg-[url(../public/endless-constellation.svg)] bg-black ${poppins.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
